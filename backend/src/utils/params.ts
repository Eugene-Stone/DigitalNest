import { ApiError } from './apiError.js';

export function getStringParam(value: string | string[] | undefined, name: string) {
	if (typeof value !== 'string') throw new ApiError(400, `${name} parameter is required`);
	return value;
}
