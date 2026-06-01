import bcrypt from 'bcryptjs';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';
import { User } from './models/User.js';

async function resetAdmin() {
	await connectDb();

	await User.findOneAndUpdate(
		{ email: env.adminEmail.toLowerCase() },
		{
			email: env.adminEmail.toLowerCase(),
			passwordHash: await bcrypt.hash(env.adminPassword, 10),
			role: 'admin',
			refreshTokenHash: null
		},
		{ upsert: true, new: true, runValidators: true }
	);

	console.log('Admin credentials reset');
	console.log(`Admin: ${env.adminEmail} / ${env.adminPassword}`);
	process.exit(0);
}

resetAdmin().catch((error) => {
	console.error(error);
	process.exit(1);
});
