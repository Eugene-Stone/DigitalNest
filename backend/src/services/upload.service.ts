import path from 'node:path';
import multer from 'multer';
import { ApiError } from '../utils/apiError.js';

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => {
		cb(null, path.resolve('src/uploads'));
	},
	filename: (_req, file, cb) => {
		const extension = path.extname(file.originalname);
		const safeBase = path
			.basename(file.originalname, extension)
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
		cb(null, `${Date.now()}-${safeBase}${extension}`);
	}
});

export const upload = multer({
	storage,
	limits: { fileSize: 5 * 1024 * 1024 },
	fileFilter: (_req, file, cb) => {
		if (!file.mimetype.startsWith('image/')) {
			cb(new ApiError(400, 'Only image files are allowed'));
			return;
		}
		cb(null, true);
	}
});
