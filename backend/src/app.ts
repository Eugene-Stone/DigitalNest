import path from 'node:path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { env } from './config/env.js';
import { adminRoutes } from './routes/admin.routes.js';
import { authRoutes } from './routes/auth.routes.js';
import { getPageBySlug, getSection } from './controllers/page.controller.js';
import { pageRoutes } from './routes/page.routes.js';
import { requestRoutes } from './routes/request.routes.js';
import { sectionRoutes } from './routes/section.routes.js';
import { uploadRoutes } from './routes/upload.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';

export function createApp() {
	const app = express();

	app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
	app.use(
		cors({
			origin: env.clientUrl,
			credentials: true
		})
	);
	app.use(express.json({ limit: '1mb' }));
	app.use(cookieParser());
	app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 }));
	app.use('/uploads', express.static(path.resolve('src/uploads')));

	app.get('/api/health', (_req, res) => {
		res.json({ status: 'ok' });
	});

	app.use('/api/pages', pageRoutes);
	app.use('/api/sections', sectionRoutes);
	app.use('/api/requests', requestRoutes);
	app.use('/api/auth', authRoutes);
	app.use('/api/admin', adminRoutes);
	app.use('/api/upload', uploadRoutes);

	// Compatibility with the previous json-server endpoints used by the current frontend.
	app.get('/pages/:slug', getPageBySlug);
	app.get('/:id(hero|about|services|features|projects|workflow|reviews|contacts|privacy)', getSection);

	app.use(notFound);
	app.use(errorHandler);

	return app;
}
