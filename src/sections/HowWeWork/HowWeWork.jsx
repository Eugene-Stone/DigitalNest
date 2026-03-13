import React from 'react';

export default function HowWeWork() {
	return (
		<section id="sect-how-we-work" className="sect-how-we-work">
			<div className="container">
				<div className="title-sect center">
					<h2 className="h2-title">
						<strong>Our</strong> workflow
					</h2>
					<div className="title-descr">
						<p>
							Build a resilient digital presence with DigitalNest’s custom
							engineering. <br />
							Accelerate your technological growth today!
						</p>
					</div>
				</div>
				<div className="how-we-work-box">
					<div className="row justify-content-between">
						<div className="how-we-work-image-cell col-lg-6">
							<div className="how-we-work-image">
								<img src="/img/inner/17.png" alt="Development Workflow" />
							</div>
						</div>
						<div className="how-we-work-txt-cell col-lg-5 col-xl-4">
							<ul className="how-we-work-lst">
								<li className="how-we-work-itm">
									<div className="h3-title how-we-work-itm-number">01</div>
									<div className="h3-title how-we-work-itm-title">
										Discovery &amp; Analysis
									</div>
									<div className="how-we-work-itm-brief">
										<p>
											Reach out to us – we’ll audit your current stack and
											define project goals.
										</p>
									</div>
								</li>
								<li className="how-we-work-itm">
									<div className="h3-title how-we-work-itm-number">02</div>
									<div className="h3-title how-we-work-itm-title">
										Architecture Blueprint
									</div>
									<div className="how-we-work-itm-brief">
										<p>
											We design a scalable system map, data schemas, and
											secure API structures.
										</p>
									</div>
								</li>
								<li className="how-we-work-itm">
									<div className="h3-title how-we-work-itm-number">03</div>
									<div className="h3-title how-we-work-itm-title">
										Agile Development
									</div>
									<div className="how-we-work-itm-brief">
										<p>
											Our team builds your product using modern frameworks
											with continuous integration and code reviews.
										</p>
									</div>
								</li>
								<li className="how-we-work-itm">
									<div className="h3-title how-we-work-itm-number">04</div>
									<div className="h3-title how-we-work-itm-title">
										Deployment &amp; Support
									</div>
									<div className="how-we-work-itm-brief">
										<p>
											We launch your ecosystem with full automation, providing
											long-term monitoring and maintenance.
										</p>
									</div>
								</li>
							</ul>
							{/* how-we-work-lst */}
						</div>
					</div>
				</div>
				<div className="btn-more-wrap center">
					<div className="button-description">
						<p>
							Ready to scale? Connect with us – we’ll dive into technical <br />
							details and help you architect the perfect system!
						</p>
					</div>
					<a href="#sect-contacts" className="btn quick-lnk">
						<span>Start a project</span>
					</a>
				</div>
			</div>
			{/* container END */}
		</section>
	);
}
