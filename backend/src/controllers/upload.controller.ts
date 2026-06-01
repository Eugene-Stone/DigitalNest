import type { RequestHandler } from 'express';
import { ApiError } from '../utils/apiError.js';

export const uploadFile: RequestHandler = (req, res, next) => {
	try {
		if (!req.file) throw new ApiError(400, 'File is required');
		const filePath = `/uploads/${req.file.filename}`;
		const origin = `${req.protocol}://${req.get('host')}`;
		res.status(201).json({ path: filePath, url: `${origin}${filePath}` });
	} catch (error) {
		next(error);
	}
};
