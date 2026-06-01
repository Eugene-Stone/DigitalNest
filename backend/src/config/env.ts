import dotenv from 'dotenv';

dotenv.config();

export const env = {
	nodeEnv: process.env.NODE_ENV ?? 'development',
	port: Number(process.env.PORT ?? 4000),
	mongoUri: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/digitalnest',
	clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173',
	jwtAccessSecret: process.env.JWT_ACCESS_SECRET ?? 'dev_access_secret',
	jwtRefreshSecret: process.env.JWT_REFRESH_SECRET ?? 'dev_refresh_secret',
	accessTokenTtl: process.env.ACCESS_TOKEN_TTL ?? '15m',
	refreshTokenTtl: process.env.REFRESH_TOKEN_TTL ?? '7d',
	adminEmail: process.env.ADMIN_EMAIL ?? 'admin@digitalnest.local',
	adminPassword: process.env.ADMIN_PASSWORD ?? 'admin12345',
	isProduction: process.env.NODE_ENV === 'production'
};
