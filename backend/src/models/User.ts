import { Schema, model, InferSchemaType } from 'mongoose';

const userSchema = new Schema(
	{
		email: { type: String, required: true, unique: true, lowercase: true, trim: true },
		passwordHash: { type: String, required: true },
		role: { type: String, enum: ['admin'], default: 'admin' },
		refreshTokenHash: { type: String, default: null }
	},
	{ timestamps: true, versionKey: false }
);

export type UserDocument = InferSchemaType<typeof userSchema>;
export const User = model('User', userSchema);
