import React from 'react';

export default function Reviews() {
	return (
		<section className="sect-reviews">
			<div className="title-sect center">
				<h2 className="h2-title">
					<strong>Reviews</strong>
				</h2>
				<div className="title-descr">
					<p>
						Every system built by DigitalNest is engineered for stability and
						exceptional performance.
					</p>
				</div>
			</div>
			<div className="reviews-slider-box">
				<div className="reviews-slider">
					<div className="review-slide-itm">
						<div className="review-slide-inner">
							<div className="review-slide-top-line">
								<div className="review-slide-top-photo">
									<img src="/img/inner/18.png" alt="Alex R." />
								</div>
								<div className="review-slide-top-txt">
									<div className="review-slide-author">Alex R. (CTO)</div>
									<div className="review-slide-date">12 February 2026</div>
								</div>
							</div>
							<div className="review-slide-txt">
								<p>
									DigitalNest completely refactored our legacy infrastructure. The
									transition to a microservices architecture was seamless,
									resulting in a 40% increase in deployment speed. Their team
									demonstrated deep expertise in Node.js and cloud security
									protocols throughout the project.
								</p>
							</div>
						</div>
					</div>
					{/* review-slide-itm */}
					<div className="review-slide-itm">
						<div className="review-slide-inner">
							<div className="review-slide-top-line">
								<div className="review-slide-top-photo">
									<img src="/img/inner/18.png" alt="Sarah J." />
								</div>
								<div className="review-slide-top-txt">
									<div className="review-slide-author">
										Sarah J. (Product Owner)
									</div>
									<div className="review-slide-date">28 January 2026</div>
								</div>
							</div>
							<div className="review-slide-txt">
								<p>
									The UI/UX transformation they provided for our SaaS platform was
									incredible. DigitalNest doesn't just write code; they build
									intuitive user experiences. Their clean, modular frontend
									components made it easy for our internal team to scale the
									product further.
								</p>
							</div>
						</div>
					</div>
					{/* review-slide-itm */}
					<div className="review-slide-itm">
						<div className="review-slide-inner">
							<div className="review-slide-top-line">
								<div className="review-slide-top-photo">
									<img src="/img/inner/18.png" alt="Michael V." />
								</div>
								<div className="review-slide-top-txt">
									<div className="review-slide-author">Michael V. (Founder)</div>
									<div className="review-slide-date">15 January 2026</div>
								</div>
							</div>
							<div className="review-slide-txt">
								<p>
									Finding a partner that understands both business logic and
									high-end engineering is rare. DigitalNest delivered our MVP on
									time and exceeded our expectations regarding system uptime and
									API responsiveness. A truly reliable partner for any tech-driven
									venture.
								</p>
							</div>
						</div>
					</div>
					{/* review-slide-itm */}
				</div>
				{/* reviews-slider */}
				<div className="slide-controls">
					<div className="container">
						<div className="slide-controls-inner">
							<div className="dots-nav" />
							<div className="slider-nav" />
						</div>
					</div>
				</div>
			</div>
			{/* reviews-slider-box */}
		</section>
	);
}
