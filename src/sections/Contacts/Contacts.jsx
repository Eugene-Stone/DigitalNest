import React from 'react';

export default function Contacts() {
	return (
		<section id="sect-contacts" className="sect-contacts">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="title-sect">
							<h2 className="h2-title">
								<strong>Contacts</strong>
							</h2>
							<div className="title-descr">
								<p>
									Let’s build your next digital breakthrough together! We provide
									remote engineering and on-site consulting across the EU, UK, and
									North America.
								</p>
								<p>
									*Global availability – our distributed team operates across
									multiple time zones to support you.
								</p>
							</div>
						</div>
						<div className="contacts-lst">
							<ul>
								<li>Telegram / WhatsApp:</li>
								<li>
									<div className="h3-title">
										<a href="tel:+12345678">+12345678</a>
									</div>
								</li>
							</ul>
							<ul>
								<li>E-mail:</li>
								<li>
									<div className="h3-title">
										<a href="mailto:dev@DigitalNest.tech">
											dev@DigitalNest.tech
										</a>
									</div>
								</li>
							</ul>
						</div>
						<div className="soc-wrap">
							<div className="soc-lst">
								<a
									href="#"
									className="soc-btn"
									title="#"
									style={{
										backgroundImage: 'url(/img/_style/_svg/_social/wts.svg)',
									}}
								/>
								<a
									href="#"
									className="soc-btn"
									title="#"
									style={{
										backgroundImage: 'url(/img/_style/_svg/_social/inst.svg)',
									}}
								/>
							</div>
						</div>
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
