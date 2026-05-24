import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { request } from '../../api/request';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang';
import { SectionType } from '../../types';

type ValueForm = {
	dateSend: string;
	dateSendSt: number;
	selectField: string;
	fullName: string;
	companyPhone: string;
	email: string;
	textarea: string;
	checkboxes: string[];
};

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Form({ sectionInfo }: { sectionInfo: SectionType }) {
	const [status, setStatus] = useState<FormStatus>('idle');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	const { titleForm } = sectionInfo;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<ValueForm>({
		mode: 'onChange',
		defaultValues: {
			fullName: 'Full Name Initial',
		},
	});

	async function sendForm(value: ValueForm) {
		const newFormIncome = new Date().toISOString();
		setStatus('loading');

		try {
			await request<ValueForm>('/requests', {
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

			setTimeout(() => {
				setStatus('success');

				console.log(JSON.stringify(value));
				reset();
			}, 2000);
		} catch (error) {
			// console.log(error.message);
			setStatus('error');
		}
	}

	function onSubmit(data: ValueForm) {
		sendForm(data);
	}

	return (
		<form
			className={status === 'loading' ? 'contact-form sending' : 'contact-form'}
			onSubmit={handleSubmit(onSubmit)}>
			<div className="form-title h3-title">{getLang(titleForm, currentLang)}</div>
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

			{status === 'success' && (
				<p className="success">
					{currentLang === 'ru' ? 'Форма успешно отправлена' : 'Form send success'}
				</p>
			)}
			{status === 'error' && (
				<p className="error">
					{currentLang === 'ru' ? 'Форма не отправлена' : 'Form not send'}
				</p>
			)}
		</form>
	);
}
