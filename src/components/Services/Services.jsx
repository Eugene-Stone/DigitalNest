import React from 'react';

export default function Services() {
	return (
		<section id="sect-service" className="sect-service">
			<div className="container">
				<div className="title-sect">
					<div className="row">
						<div className="col-xl-6">
							<h2 className="h2-title">
								<strong>How</strong> we build
							</h2>
							<div className="title-descr">
								<p>
									Every solution we architect is more than just code – it’s a
									synergy of performance, security, and scalability, transforming
									your digital presence into a high-velocity, reliable ecosystem.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="service-lst-box">
					<div className="service-lst">
						<div className="row">
							<div className="col-12 service-itm service-itm-big">
								<div className="row align-items-center flex-lg-row-reverse">
									<div className="col-lg-6 service-image-cell">
										<div className="service-image">
											<img
												src="/img/inner/6.png"
												alt="Cloud Infrastructure"
											/>
										</div>
									</div>
									<div className="col-lg-6 service-txt-cell">
										<div className="service-itm-txt-inner">
											<div className="h3-title service-itm-number">01</div>
											<div className="h3-title service-itm-title">
												Cloud Infrastructure
											</div>
											<div className="service-itm-brief">
												<p>
													Scalable server clusters, automated CI/CD
													pipelines, and robust microservices built on AWS
													or Azure. Uninterrupted uptime with 24/7
													monitoring and self-healing capabilities for
													over 5 years.
												</p>
											</div>
											<div className="btn-wrap">
												<a href="#sect-gallery" className="btn quick-lnk">
													<span>Explore stack</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 service-itm">
								<div className="row">
									<div className="col-6 service-txt-cell">
										<div className="service-itm-txt-inner">
											<div className="h3-title service-itm-number">02</div>
											<div className="h3-title service-itm-title">
												Tech Audit & Optimization
											</div>
											<div className="service-itm-brief">
												<p>
													Deep system analysis for performance
													bottlenecks, security vulnerability assessments,
													and database query refactoring with the latest
													tools.
												</p>
											</div>
										</div>
									</div>
									<div className="col-6 service-image-cell">
										<div className="service-image">
											<img src="/img/inner/7.png" alt="Tech Audit" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 service-itm">
								<div className="row">
									<div className="col-6 service-txt-cell">
										<div className="service-itm-txt-inner">
											<div className="h3-title service-itm-number">03</div>
											<div className="h3-title service-itm-title">
												Custom Web Engineering
											</div>
											<div className="service-itm-brief">
												<p>
													Advanced frontend modules, API integrations,
													unique backend logic, and specialized software
													components for enterprise.
												</p>
											</div>
										</div>
									</div>
									<div className="col-6 service-image-cell">
										<div className="service-image">
											<img src="/img/inner/8.png" alt="Engineering" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 service-itm">
								<div className="row">
									<div className="col-6 service-txt-cell">
										<div className="service-itm-txt-inner">
											<div className="h3-title service-itm-number">04</div>
											<div className="h3-title service-itm-title">
												UI/UX Product Design
											</div>
											<div className="service-itm-brief">
												<p>
													High-fidelity wireframes, interactive
													prototypes, and user journey mapping focused on
													usability and modern tech aesthetics.
												</p>
											</div>
										</div>
									</div>
									<div className="col-6 service-image-cell">
										<div className="service-image">
											<img src="/img/inner/9.png" alt="Product Design" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 service-itm">
								<div className="row">
									<div className="col-6 service-txt-cell">
										<div className="service-itm-txt-inner">
											<div className="h3-title service-itm-number">05</div>
											<div className="h3-title service-itm-title">
												Exclusive Enterprise Support
											</div>
											<div className="service-itm-brief">
												<p>
													Dedicated DevOps support and priority incident
													management – premium tier available for our
													high-load corporate partners.
												</p>
											</div>
										</div>
									</div>
									<div className="col-6 service-image-cell">
										<div className="service-image">
											<img src="/img/inner/10.png" alt="Support" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="btn-more-wrap center">
						<a href="#sect-contacts" className="btn quick-lnk">
							<span>Get a quote</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
