# DigitalNest Backend API

Educational production-style API for the DigitalNest React project.

## Stack Choice

This backend uses **Clean Express with TypeScript + MongoDB/Mongoose**. MongoDB is a good fit here because the website content is dynamic and multilingual: fields like `title.en`, `title.ru`, section arrays, images, service cards, and privacy content blocks can stay close to the frontend JSON shape.

## Initialization

```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

Frontend:

```bash
cp .env.example .env
npm install
npm run dev
```

Or run Vite and the API together from the project root:

```bash
npm run start:api
```

Default admin:

```text
admin@digitalnest.local
admin12345
```

## API Contract

Public:

- `GET /api/pages`
- `GET /api/pages/:slug`
- `GET /api/sections/:id`
- `POST /api/requests`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`

Protected:

- `PUT /api/sections/:id`
- `GET /api/requests`
- `PATCH /api/requests/:id/status`
- `DELETE /api/requests/:id`
- `GET /api/admin/stats`
- `POST /api/upload`

## Auth Flow

1. Admin submits email/password to `POST /api/auth/login`.
2. API returns a short-lived access token in JSON.
3. API also sets a refresh token in an HTTP-only cookie.
4. React stores the access token in memory only.
5. If a protected request returns `401`, React calls `POST /api/auth/refresh`.
6. Backend validates the refresh cookie, rotates it, and returns a new access token.
7. Logout clears the refresh session and cookie.

## WebSocket Flow

The API initializes Socket.io on the same HTTP server. Admin clients connect, emit `admin:join`, and are placed in an `admins` room. When a public contact form creates a lead through `POST /api/requests`, the API emits `lead:created` to that room, so the dashboard updates without polling.

## Axios Instance Example

The project currently uses a small `fetch` client in `src/api/client.ts`. In many teams you will see the same idea implemented with Axios:

```ts
import axios from 'axios';

let accessToken: string | null = null;

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	withCredentials: true,
});

api.interceptors.request.use((config) => {
	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			const response = await api.post('/api/auth/refresh');
			accessToken = response.data.accessToken;
			originalRequest.headers.Authorization = `Bearer ${accessToken}`;
			return api(originalRequest);
		}

		return Promise.reject(error);
	}
);
```

## Environment Variables

Backend `.env`:

```text
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/digitalnest
CLIENT_URL=http://localhost:5173
JWT_ACCESS_SECRET=change_me_access_secret
JWT_REFRESH_SECRET=change_me_refresh_secret
```

Frontend `.env`:

```text
VITE_API_BASE_URL=http://localhost:4000
VITE_SOCKET_URL=http://localhost:4000
```
