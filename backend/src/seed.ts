import { readFile } from 'node:fs/promises';
import path from 'node:path';
import bcrypt from 'bcryptjs';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';
import { LeadRequest } from './models/LeadRequest.js';
import { Page } from './models/Page.js';
import { Section } from './models/Section.js';
import { User } from './models/User.js';

const sectionKeys = ['privacy', 'hero', 'about', 'services', 'features', 'projects', 'workflow', 'reviews', 'contacts'];

async function seed() {
	await connectDb();

	const dbPath = path.resolve('../db.json');
	const db = JSON.parse(await readFile(dbPath, 'utf8'));

	await Promise.all([
		Page.deleteMany({}),
		Section.deleteMany({}),
		LeadRequest.deleteMany({}),
		User.deleteMany({})
	]);

	await Page.insertMany(db.pages);
	await Section.insertMany(sectionKeys.map((id) => ({ id, data: db[id] })));
	await LeadRequest.insertMany(db.requests ?? []);
	await User.create({
		email: env.adminEmail,
		passwordHash: await bcrypt.hash(env.adminPassword, 10),
		role: 'admin'
	});

	console.log('Seed completed');
	console.log(`Admin: ${env.adminEmail} / ${env.adminPassword}`);
	process.exit(0);
}

seed().catch((error) => {
	console.error(error);
	process.exit(1);
});
