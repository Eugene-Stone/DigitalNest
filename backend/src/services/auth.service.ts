import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { ApiError } from '../utils/apiError.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/tokens.js';

export async function login(email: string, password: string) {
	const user = await User.findOne({ email: email.toLowerCase() });
	if (!user) throw new ApiError(401, 'Invalid credentials');

	const passwordMatches = await bcrypt.compare(password, user.passwordHash);
	if (!passwordMatches) throw new ApiError(401, 'Invalid credentials');

	const payload = { userId: user.id, email: user.email, role: user.role as 'admin' };
	const accessToken = signAccessToken(payload);
	const refreshToken = signRefreshToken(payload);

	user.refreshTokenHash = await bcrypt.hash(refreshToken, 10);
	await user.save();

	return { accessToken, refreshToken, user: { email: user.email, role: user.role } };
}

export async function refresh(refreshToken: string) {
	const payload = verifyRefreshToken(refreshToken);
	const user = await User.findById(payload.userId);
	if (!user?.refreshTokenHash) throw new ApiError(401, 'Refresh session is not active');

	const tokenMatches = await bcrypt.compare(refreshToken, user.refreshTokenHash);
	if (!tokenMatches) throw new ApiError(401, 'Refresh token was rotated or revoked');

	const nextPayload = { userId: user.id, email: user.email, role: user.role as 'admin' };
	const accessToken = signAccessToken(nextPayload);
	const nextRefreshToken = signRefreshToken(nextPayload);

	user.refreshTokenHash = await bcrypt.hash(nextRefreshToken, 10);
	await user.save();

	return { accessToken, refreshToken: nextRefreshToken, user: { email: user.email, role: user.role } };
}

export async function logout(refreshToken?: string) {
	if (!refreshToken) return;

	try {
		const payload = verifyRefreshToken(refreshToken);
		await User.findByIdAndUpdate(payload.userId, { refreshTokenHash: null });
	} catch {
		// Logout should be idempotent for the client.
	}
}
