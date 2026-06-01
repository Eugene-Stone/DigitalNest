import { Router } from 'express';
import {
	createRequest,
	deleteRequest,
	getRequests,
	patchRequestStatus
} from '../controllers/request.controller.js';
import { requireAuth } from '../middlewares/auth.js';
import { validateBody } from '../middlewares/validate.js';
import { createRequestSchema, updateRequestStatusSchema } from '../schemas/request.schema.js';

export const requestRoutes = Router();

requestRoutes.post('/', validateBody(createRequestSchema), createRequest);
requestRoutes.get('/', requireAuth, getRequests);
requestRoutes.patch('/:id/status', requireAuth, validateBody(updateRequestStatusSchema), patchRequestStatus);
requestRoutes.delete('/:id', requireAuth, deleteRequest);
