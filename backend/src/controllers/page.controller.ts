import type { RequestHandler } from 'express';
import * as pageService from '../services/page.service.js';
import { getStringParam } from '../utils/params.js';

export const getPages: RequestHandler = async (_req, res, next) => {
	try {
		res.json(await pageService.getPages());
	} catch (error) {
		next(error);
	}
};

export const getPageBySlug: RequestHandler = async (req, res, next) => {
	try {
		res.json(await pageService.getPageBySlug(getStringParam(req.params.slug, 'slug')));
	} catch (error) {
		next(error);
	}
};

export const getSection: RequestHandler = async (req, res, next) => {
	try {
		res.json(await pageService.getSection(getStringParam(req.params.id, 'id')));
	} catch (error) {
		next(error);
	}
};

export const updateSection: RequestHandler = async (req, res, next) => {
	try {
		res.json(await pageService.updateSection(getStringParam(req.params.id, 'id'), req.body));
	} catch (error) {
		next(error);
	}
};
