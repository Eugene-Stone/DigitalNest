import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDb() {
	mongoose.set('strictQuery', true);
	try {
		await mongoose.connect(env.mongoUri);
		console.log(`MongoDB connected: ${env.mongoUri}`);
	} catch (error) {
		console.error(`MongoDB connection failed: ${env.mongoUri}`);
		console.error('Start MongoDB first: npm run mongo:up');
		throw error;
	}
}
