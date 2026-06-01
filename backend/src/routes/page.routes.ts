import { Router } from 'express';
import { getPageBySlug, getPages } from '../controllers/page.controller.js';

export const pageRoutes = Router();

pageRoutes.get('/', getPages);
pageRoutes.get('/:slug', getPageBySlug);
