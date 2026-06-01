import type { ErrorRequestHandler } from 'express';
import { ApiError } from '../utils/apiError.js';
import { env } from '../config/env.js';

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
	const statusCode = error instanceof ApiError ? error.statusCode : 500;

	res.status(statusCode).json({
		message: error.message || 'Internal server error',
		...(env.isProduction ? {} : { stack: error.stack })
	});
};
