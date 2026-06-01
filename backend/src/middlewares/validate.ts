import type { RequestHandler } from 'express';
import type { ZodSchema } from 'zod';
import { ApiError } from '../utils/apiError.js';

export function validateBody(schema: ZodSchema): RequestHandler {
	return (req, _res, next) => {
		const result = schema.safeParse(req.body);

		if (!result.success) {
			next(new ApiError(400, result.error.issues.map((issue) => issue.message).join(', ')));
			return;
		}

		req.body = result.data;
		next();
	};
}
