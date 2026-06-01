import { Router } from 'express';
import { uploadFile } from '../controllers/upload.controller.js';
import { requireAuth } from '../middlewares/auth.js';
import { upload } from '../services/upload.service.js';

export const uploadRoutes = Router();

uploadRoutes.post('/', requireAuth, upload.single('file'), uploadFile);
