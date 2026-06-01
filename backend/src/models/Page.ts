import { Schema, model, InferSchemaType } from 'mongoose';

const pageSchema = new Schema(
	{
		id: { type: String, required: true, unique: true },
		slug: { type: String, required: true, unique: true, index: true },
		sections: [{ type: String, required: true }]
	},
	{ timestamps: true, versionKey: false }
);

export type PageDocument = InferSchemaType<typeof pageSchema>;
export const Page = model('Page', pageSchema);
