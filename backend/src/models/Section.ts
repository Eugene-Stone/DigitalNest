import { Schema, model, InferSchemaType } from 'mongoose';

const sectionSchema = new Schema(
	{
		id: { type: String, required: true, unique: true, index: true },
		data: { type: Schema.Types.Mixed, required: true }
	},
	{
		timestamps: true,
		versionKey: false,
		minimize: false
	}
);

export type SectionDocument = InferSchemaType<typeof sectionSchema>;
export const Section = model('Section', sectionSchema);
