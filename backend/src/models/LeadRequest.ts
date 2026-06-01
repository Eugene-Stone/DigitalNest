import { Schema, model, InferSchemaType } from 'mongoose';

const leadRequestSchema = new Schema(
	{
		dateSend: { type: String, required: true },
		dateSendSt: { type: Number, required: true },
		selectField: { type: String, default: '' },
		fullName: { type: String, required: true, trim: true },
		companyPhone: { type: String, required: true, trim: true },
		email: { type: String, required: true, lowercase: true, trim: true },
		textarea: { type: String, default: '', trim: true },
		checkboxes: [{ type: String }],
		status: { type: String, enum: ['new', 'processed'], default: 'new' }
	},
	{ timestamps: true, versionKey: false }
);

export type LeadRequestDocument = InferSchemaType<typeof leadRequestSchema>;
export const LeadRequest = model('LeadRequest', leadRequestSchema);
