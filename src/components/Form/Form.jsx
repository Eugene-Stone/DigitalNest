import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { request } from '../../api/request';

export default function Form() {
	const [isSending, setIsSending] = useState();
	const [success, setSuccess] = useState();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			fullName: 'Full Name Initial',
		},
	});

	async function sendForm(value) {
		const newFormIncome = new Date().toISOString();

		try {
			await request('/requests', {
				method: 'POST',
				body: JSON.stringify({
					dateSend: newFormIncome,
					// eslint-disable-next-line
					dateSendSt: Date.now(),
					selectField: value.selectField,
					fullName: value.fullName,
					companyPhone: value.companyPhone,
					email: value.email,
					textarea: value.textarea,
					checkboxes: value.checkboxes,
				}),
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	function onSubmit(data) {
		setIsSending(true);
		setSuccess(false);

		sendForm(data);

		setTimeout(() => {
			setIsSending(false);
			setSuccess(true);

			console.log(JSON.stringify(data));
			reset();
		}, 2000);
	}

	return (
		<form
			className={isSending ? 'contact-form sending' : 'contact-form'}
			onSubmit={handleSubmit(onSubmit)}>
			<div className="form-title h3-title">
				Start a conversation about your project and get a free technical infrastructure
				audit.
			</div>
			<div className="fields-box">
				<div className="field-itm">
					<div className="cust-sel">
						<select {...register('selectField')}>
							<option value="">Select Project Type</option>
							<option value="web">Web Engineering</option>
							<option value="cloud">Cloud Infrastructure</option>
							<option value="audit">Technical Audit</option>
						</select>
					</div>
				</div>
				<div className="field-itm">
					<div className="cust-inp">
						<input
							{...register('fullName', {
								required: 'Field required',
								minLength: {
									value: 3,
									message: 'Min length 3 symbols',
								},
							})}
							type="text"
							// placeholder="Full Name"
						/>
					</div>
					{errors.fullName && (
						<div className="error-field">
							{errors.fullName.message || 'Full name is required.'}
						</div>
					)}
				</div>
				<div className="field-itm">
					<div className="cust-inp">
						<input
							{...register('companyPhone', {
								required: 'Field required',
							})}
							placeholder="Company Phone"
						/>
					</div>
					{errors.companyPhone && (
						<div className="error-field">
							{errors.companyPhone.message || 'Phone is required.'}
						</div>
					)}
				</div>
				<div className="field-itm">
					<div className="cust-inp">
						<input {...register('email')} type="email" placeholder="Business E-Mail" />
					</div>
					{errors.email && <div className="error-field">{errors.email.message}</div>}
				</div>
				<div className="field-itm">
					<div className="cust-textarea">
						<textarea
							{...register('textarea')}
							cols={40}
							rows={4}
							placeholder="Briefly describe your project or tech stack"
							defaultValue={''}
						/>
					</div>
				</div>
				<div className="field-itm">
					<ul className="check-lst">
						<li>
							<label className="cust-check">
								<input
									type="checkbox"
									{...register('checkboxes')}
									defaultValue={'Checkbox 1'}
								/>

								<span className="wpcf7-list-item-label">Checkbox 1</span>
							</label>
						</li>
						<li>
							<label className="cust-check">
								<input
									type="checkbox"
									{...register('checkboxes')}
									defaultValue={'Checkbox 2'}
								/>

								<span className="wpcf7-list-item-label">Checkbox 2</span>
							</label>
						</li>
					</ul>
				</div>
				<div className="btn-form-wrap">
					<span className={`btn-form ${isValid ? '' : 'disabled'}`}>
						<input type="submit" />
						<span>Send</span>
					</span>
				</div>
			</div>

			{success && <p className="success">Form send success</p>}
		</form>
	);
}
