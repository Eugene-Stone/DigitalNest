const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';
const SECTION_ENDPOINTS = new Set([
	'/privacy',
	'/hero',
	'/about',
	'/services',
	'/features',
	'/projects',
	'/workflow',
	'/reviews',
	'/contacts',
]);

export async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
	const normalizedEndpoint = endpoint.startsWith('/api')
		? endpoint
		: SECTION_ENDPOINTS.has(endpoint)
			? `/api/sections${endpoint}`
			: `/api${endpoint}`;
	const response = await fetch(`${BASE_URL}${normalizedEndpoint}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		...options,
	});

	if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

	return response.json() as Promise<T>;
}
