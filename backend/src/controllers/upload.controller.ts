import type { RequestHandler } from 'express';
import { ApiError } from '../utils/apiError.js';

export const uploadFile: RequestHandler = (req, res, next) => {
	try {
		if (!req.file) throw new ApiError(400, 'File is required');
		res.status(201).json({ path: `/uploads/${req.file.filename}` });
	} catch (error) {
		next(error);
	}
};
