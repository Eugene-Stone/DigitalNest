import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';

export default function Contacts() {
	const { section, loading, errorData } = useSectionData('/contacts');

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
						<form action="#" className="contact-form">
							<div className="form-title h3-title">
								Start a conversation about your project and get a free technical
								infrastructure audit.
							</div>
							<div className="fields-box">
								<div className="field-itm">
									<div className="cust-sel">
										<span className="wpcf7-form-control-wrap dropdown">
											<select
												name="dropdown"
												className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
												aria-required="true"
												aria-invalid="false">
												<option value="">Select Project Type</option>
												<option value="web">Web Engineering</option>
												<option value="cloud">Cloud Infrastructure</option>
												<option value="audit">Technical Audit</option>
											</select>
										</span>
									</div>
								</div>
								<div className="field-itm">
									<div className="cust-inp">
										<span className="wpcf7-form-control-wrap address">
											<input
												type="text"
												name="address"
												defaultValue=""
												size={40}
												className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
												aria-required="true"
												aria-invalid="false"
												placeholder="Full Name"
											/>
										</span>
									</div>
								</div>
								<div className="field-itm">
									<div className="cust-inp">
										<span className="wpcf7-form-control-wrap address">
											<input
												type="text"
												name="address"
												defaultValue=""
												size={40}
												className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
												aria-required="true"
												aria-invalid="false"
												placeholder="Company Phone"
											/>
										</span>
									</div>
								</div>
								<div className="field-itm">
									<div className="cust-inp">
										<span className="wpcf7-form-control-wrap address">
											<input
												type="text"
												name="address"
												defaultValue=""
												size={40}
												className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
												aria-required="true"
												aria-invalid="false"
												placeholder="Business E-Mail"
											/>
										</span>
									</div>
								</div>
								<div className="field-itm">
									<div className="cust-textarea">
										<span className="wpcf7-form-control-wrap textarea">
											<textarea
												name="textarea"
												cols={40}
												rows={4}
												className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
												aria-required="true"
												aria-invalid="false"
												placeholder="Briefly describe your project or tech stack"
												defaultValue={''}
											/>
										</span>
									</div>
								</div>
								<div className="field-itm">
									<div className="check-lst">
										<span className="wpcf7-form-control-wrap checkbox">
											<span className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required">
												<span className="wpcf7-list-item first">
													<label>
														<input
															type="checkbox"
															name="checkbox[]"
															defaultValue={1}
														/>

														<span className="wpcf7-list-item-label">
															Checkbox 1
														</span>
													</label>
												</span>

												<span className="wpcf7-list-item">
													<label>
														<input
															type="checkbox"
															name="checkbox[]"
															defaultValue={2}
														/>

														<span className="wpcf7-list-item-label">
															Checkbox 2
														</span>
													</label>
												</span>
											</span>
										</span>
									</div>
								</div>
								<div className="btn-form-wrap">
									<span className="btn-form">
										<input
											type="submit"
											defaultValue="Submit Request"
											className="wpcf7-form-control wpcf7-submit"
										/>
										<span className="ajax-loader" />
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
