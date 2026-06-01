import { SectionType } from '../../types';

export type AdminUser = {
	email: string;
	role: 'admin';
};

export type LeadRequest = {
	_id: string;
	dateSend: string;
	dateSendSt: number;
	selectField: string;
	fullName: string;
	companyPhone: string;
	email: string;
	textarea: string;
	checkboxes: string[];
	status: 'new' | 'processed';
	createdAt: string;
};

export type RequestsResponse = {
	items: LeadRequest[];
	total: number;
	page: number;
	limit: number;
	pages: number;
};

export type RequestStats = {
	totalRequests: number;
	bySelectField: { selectField: string; count: number }[];
	byDay: { date: string; count: number }[];
};

export type EditableSection = SectionType & Record<string, unknown>;
