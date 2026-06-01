import { Router } from 'express';
import { getSection, updateSection } from '../controllers/page.controller.js';
import { requireAuth } from '../middlewares/auth.js';

export const sectionRoutes = Router();

sectionRoutes.get('/:id', getSection);
sectionRoutes.put('/:id', requireAuth, updateSection);
