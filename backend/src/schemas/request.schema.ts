import { z } from 'zod';

export const createRequestSchema = z.object({
	dateSend: z.string().optional(),
	dateSendSt: z.number().optional(),
	selectField: z.string().max(80).optional().default(''),
	fullName: z.string().min(2).max(120),
	companyPhone: z.string().min(3).max(80),
	email: z.string().email(),
	textarea: z.string().max(3000).optional().default(''),
	checkboxes: z.array(z.string().max(120)).optional().default([])
});

export const updateRequestStatusSchema = z.object({
	status: z.enum(['new', 'processed'])
});
