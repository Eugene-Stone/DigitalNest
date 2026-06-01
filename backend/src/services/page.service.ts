import { Page } from '../models/Page.js';
import { Section } from '../models/Section.js';
import { ApiError } from '../utils/apiError.js';

export async function getPages() {
	return Page.find().lean();
}

export async function getPageBySlug(slug: string) {
	const page = await Page.findOne({ slug }).lean();
	if (!page) throw new ApiError(404, 'Page not found');
	return page;
}

export async function getSection(id: string) {
	const section = await Section.findOne({ id }).lean();
	if (!section) throw new ApiError(404, 'Section not found');
	return section.data;
}

export async function updateSection(id: string, data: unknown) {
	const section = await Section.findOneAndUpdate(
		{ id },
		{ id, data },
		{ new: true, upsert: true, runValidators: true }
	).lean();

	return section.data;
}
