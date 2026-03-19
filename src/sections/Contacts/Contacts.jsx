import { useForm } from 'react-hook-form';
import { useSectionData } from '../../hooks/useSectionData';
import { request } from '../../api/request';
import TitleHtml from '../../utils/TitleHtml';

export default function Contacts() {
	const { section, loading, errorData } = useSectionData('/contacts');

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
		// const newFormIncome = self.crypto?.randomUUID();
		const newFormIncome = Date.now();

		try {
			await request('/requests', {
				method: 'POST',
				body: JSON.stringify({
					dateSend: newFormIncome,
					selectField: value.selectField,
					fullName: value.fullName,
					companyPhone: value.companyPhone,
					textarea: value.textarea,
					checkboxes: value.checkboxes,
				}),
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	function onSubmit(data) {
		console.log(JSON.stringify(data));
		sendForm(data);
		reset();
	}

	// console.log(useForm);

	if (loading) {
		return <div>Loading Services...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, description, phone, email, social } = section || {};
	const iconSocial = {
		instagram: '/img/_style/_svg/_social/inst.svg',
		wts: 'img/_style/_svg/_social/wts.svg',
	};

	return (
		<section id="contacts" className="sect-contacts">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="title-sect">
							<TitleHtml titleClass="h2-title">{title}</TitleHtml>

							{description && (
								<div className="title-descr">
									{description.map((p, i) => {
										return <p key={i}>{p}</p>;
									})}
								</div>
							)}
						</div>
						<div className="contacts-lst">
							{phone && (
								<ul>
									<li>Telegram / WhatsApp:</li>
									<li>
										<div className="h3-title">
											<a href={`tel:${phone}`}>{phone}</a>
										</div>
									</li>
								</ul>
							)}

							{email && (
								<ul>
									<li>E-mail:</li>
									<li>
										<div className="h3-title">
											<a href={`mailto:${email}`}>{email}</a>
										</div>
									</li>
								</ul>
							)}
						</div>

						{social && (
							<div className="soc-wrap">
								<div className="soc-lst">
									{Object.entries(social || {}).map(([key, url]) => (
										<a
											key={key}
											href={url}
											className="soc-btn"
											title={key}
											target="_blank"
											rel="noreferrer"
											style={{
												backgroundImage: `url(${iconSocial[key]})`,
											}}
										/>
									))}
								</div>
							</div>
						)}
					</div>
					<div className="col-lg-6">
						<form onSubmit={handleSubmit(onSubmit)} className="contact-form">
							<div className="form-title h3-title">
								Start a conversation about your project and get a free technical
								infrastructure audit.
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
											{...register('companyPhone')}
											placeholder="Company Phone"
										/>
									</div>
								</div>
								<div className="field-itm">
									<div className="cust-inp">
										<input
											{...register('email')}
											type="email"
											placeholder="Business E-Mail"
										/>
									</div>
									{errors.email && (
										<div className="error-field">{errors.email.message}</div>
									)}
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

												<span className="wpcf7-list-item-label">
													Checkbox 1
												</span>
											</label>
										</li>
										<li>
											<label className="cust-check">
												<input
													type="checkbox"
													{...register('checkboxes')}
													defaultValue={'Checkbox 2'}
												/>

												<span className="wpcf7-list-item-label">
													Checkbox 2
												</span>
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
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
