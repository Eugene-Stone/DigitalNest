import { LeadRequest } from '../models/LeadRequest.js';
import { cleanText } from '../utils/sanitize.js';

export type CreateLeadRequestInput = {
	dateSend?: string;
	dateSendSt?: number;
	selectField?: string;
	fullName: string;
	companyPhone: string;
	email: string;
	textarea?: string;
	checkboxes?: string[];
};

export async function createLeadRequest(input: CreateLeadRequestInput) {
	const now = new Date();

	return LeadRequest.create({
		dateSend: input.dateSend ?? now.toISOString(),
		dateSendSt: input.dateSendSt ?? now.getTime(),
		selectField: cleanText(input.selectField),
		fullName: cleanText(input.fullName),
		companyPhone: cleanText(input.companyPhone),
		email: cleanText(input.email).toLowerCase(),
		textarea: cleanText(input.textarea),
		checkboxes: input.checkboxes?.map(cleanText) ?? []
	});
}

export async function listLeadRequests(search = '', page = 1, limit = 10) {
	const safePage = Math.max(page, 1);
	const safeLimit = Math.min(Math.max(limit, 1), 100);
	const filter = search
		? {
				$or: [
					{ fullName: { $regex: search, $options: 'i' } },
					{ email: { $regex: search, $options: 'i' } },
					{ companyPhone: { $regex: search, $options: 'i' } },
					{ selectField: { $regex: search, $options: 'i' } }
				]
			}
		: {};

	const [items, total] = await Promise.all([
		LeadRequest.find(filter)
			.sort({ createdAt: -1 })
			.skip((safePage - 1) * safeLimit)
			.limit(safeLimit)
			.lean(),
		LeadRequest.countDocuments(filter)
	]);

	return { items, total, page: safePage, limit: safeLimit, pages: Math.ceil(total / safeLimit) };
}

export async function updateLeadStatus(id: string, status: 'new' | 'processed') {
	return LeadRequest.findByIdAndUpdate(id, { status }, { new: true, runValidators: true }).lean();
}

export async function deleteLeadRequest(id: string) {
	await LeadRequest.findByIdAndDelete(id);
}

export async function getRequestStats() {
	const [totalRequests, bySelectField, byDay] = await Promise.all([
		LeadRequest.countDocuments(),
		LeadRequest.aggregate([
			{ $group: { _id: '$selectField', count: { $sum: 1 } } },
			{ $sort: { count: -1 } }
		]),
		LeadRequest.aggregate([
			{
				$group: {
					_id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
					count: { $sum: 1 }
				}
			},
			{ $sort: { _id: 1 } }
		])
	]);

	return {
		totalRequests,
		bySelectField: bySelectField.map((item) => ({
			selectField: item._id || 'unknown',
			count: item.count
		})),
		byDay: byDay.map((item) => ({ date: item._id, count: item.count }))
	};
}
