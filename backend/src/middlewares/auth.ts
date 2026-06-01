import type { RequestHandler } from 'express';
import { ApiError } from '../utils/apiError.js';
import { verifyAccessToken } from '../utils/tokens.js';

export const requireAuth: RequestHandler = (req, _res, next) => {
	const header = req.headers.authorization;
	const token = header?.startsWith('Bearer ') ? header.slice(7) : null;

	if (!token) {
		next(new ApiError(401, 'Access token is required'));
		return;
	}

	try {
		req.user = verifyAccessToken(token);
		next();
	} catch {
		next(new ApiError(401, 'Invalid or expired access token'));
	}
};
