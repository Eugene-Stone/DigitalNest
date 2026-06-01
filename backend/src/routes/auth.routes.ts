import { Router } from 'express';
import { login, logout, refresh } from '../controllers/auth.controller.js';
import { validateBody } from '../middlewares/validate.js';
import { loginSchema } from '../schemas/auth.schema.js';

export const authRoutes = Router();

authRoutes.post('/login', validateBody(loginSchema), login);
authRoutes.post('/refresh', refresh);
authRoutes.post('/logout', logout);
