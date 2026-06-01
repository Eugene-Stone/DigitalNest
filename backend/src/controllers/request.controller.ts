import type { RequestHandler } from 'express';
import { getIo } from '../socket.js';
import * as requestService from '../services/request.service.js';
import { ApiError } from '../utils/apiError.js';
import { getStringParam } from '../utils/params.js';

export const createRequest: RequestHandler = async (req, res, next) => {
	try {
		const lead = await requestService.createLeadRequest(req.body);
		getIo().to('admins').emit('lead:created', lead);
		res.status(201).json(lead);
	} catch (error) {
		next(error);
	}
};

export const getRequests: RequestHandler = async (req, res, next) => {
	try {
		const search = String(req.query.search ?? '');
		const page = Number(req.query.page ?? 1);
		const limit = Number(req.query.limit ?? 10);
		res.json(await requestService.listLeadRequests(search, page, limit));
	} catch (error) {
		next(error);
	}
};

export const patchRequestStatus: RequestHandler = async (req, res, next) => {
	try {
		const lead = await requestService.updateLeadStatus(getStringParam(req.params.id, 'id'), req.body.status);
		if (!lead) throw new ApiError(404, 'Request not found');
		res.json(lead);
	} catch (error) {
		next(error);
	}
};

export const deleteRequest: RequestHandler = async (req, res, next) => {
	try {
		await requestService.deleteLeadRequest(getStringParam(req.params.id, 'id'));
		res.status(204).send();
	} catch (error) {
		next(error);
	}
};

export const getStats: RequestHandler = async (_req, res, next) => {
	try {
		res.json(await requestService.getRequestStats());
	} catch (error) {
		next(error);
	}
};
