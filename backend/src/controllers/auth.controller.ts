import type { RequestHandler } from 'express';
import { env } from '../config/env.js';
import * as authService from '../services/auth.service.js';
import { ApiError } from '../utils/apiError.js';

const refreshCookieName = 'refreshToken';

function setRefreshCookie(res: Parameters<RequestHandler>[1], refreshToken: string) {
	res.cookie(refreshCookieName, refreshToken, {
		httpOnly: true,
		secure: env.isProduction,
		sameSite: env.isProduction ? 'none' : 'lax',
		path: '/api/auth/refresh',
		maxAge: 7 * 24 * 60 * 60 * 1000
	});
}

export const login: RequestHandler = async (req, res, next) => {
	try {
		const result = await authService.login(req.body.email, req.body.password);
		setRefreshCookie(res, result.refreshToken);
		res.json({ accessToken: result.accessToken, user: result.user });
	} catch (error) {
		next(error);
	}
};

export const refresh: RequestHandler = async (req, res, next) => {
	try {
		const currentRefreshToken = req.cookies?.[refreshCookieName];
		if (!currentRefreshToken) throw new ApiError(401, 'Refresh token cookie is missing');

		const result = await authService.refresh(currentRefreshToken);
		setRefreshCookie(res, result.refreshToken);
		res.json({ accessToken: result.accessToken, user: result.user });
	} catch (error) {
		next(error);
	}
};

export const logout: RequestHandler = async (req, res, next) => {
	try {
		await authService.logout(req.cookies?.[refreshCookieName]);
		res.clearCookie(refreshCookieName, { path: '/api/auth/refresh' });
		res.status(204).send();
	} catch (error) {
		next(error);
	}
};
