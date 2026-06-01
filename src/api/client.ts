const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

let accessToken: string | null = null;

export function setAccessToken(token: string | null) {
	accessToken = token;
}

export function getAccessToken() {
	return accessToken;
}

type ApiOptions = RequestInit & {
	skipAuthRefresh?: boolean;
};

export async function apiRequest<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
	const headers = new Headers(options.headers);

	if (!(options.body instanceof FormData) && !headers.has('Content-Type')) {
		headers.set('Content-Type', 'application/json');
	}

	if (accessToken) {
		headers.set('Authorization', `Bearer ${accessToken}`);
	}

	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		headers,
		credentials: 'include',
	});

	if (response.status === 401 && !options.skipAuthRefresh) {
		const refreshed = await refreshAccessToken();
		if (refreshed) return apiRequest<T>(endpoint, { ...options, skipAuthRefresh: true });
	}

	if (!response.ok) {
		const error = await response.json().catch(() => ({ message: `HTTP error: ${response.status}` }));
		throw new Error(error.message);
	}

	if (response.status === 204) return undefined as T;
	return response.json() as Promise<T>;
}

export async function refreshAccessToken() {
	try {
		const data = await apiRequest<{ accessToken: string }>('/api/auth/refresh', {
			method: 'POST',
			skipAuthRefresh: true,
		});
		setAccessToken(data.accessToken);
		return true;
	} catch {
		setAccessToken(null);
		return false;
	}
}

export { API_BASE_URL };
