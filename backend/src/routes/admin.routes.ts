import { Router } from 'express';
import { getStats } from '../controllers/request.controller.js';
import { requireAuth } from '../middlewares/auth.js';

export const adminRoutes = Router();

adminRoutes.get('/stats', requireAuth, getStats);
