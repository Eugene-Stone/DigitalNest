import React from 'react';

export default function Hero() {
	return (
		<div className="top-screen">
			<div className="top-screen-inner">
				<div className="top-screen-txt-box">
					<div className="container">
						<div className="top-screen-txt">
							<div className="top-screen-txt-top">
								<div className="row">
									<div className="col-xl-9">
										<h1 className="h1-title">
											Advanced Digital Ecosystem Solutions: Scalable Tech &
											Smart Data Harmony
										</h1>
									</div>
								</div>
							</div>
							<div className="top-screen-txt-bottom">
								<div className="row">
									<div className="col-lg-8 col-xl-6">
										<div className="top-screen-txt-brief">
											<p>
												High-tech infrastructure with cloud systems:
												efficiency, security, and power for your
												network—automated and maintenance-free.
											</p>
										</div>
									</div>
									<div className="col-lg-4 col-xl-6">
										<div className="btn-wrap">
											<a href="#sect-contacts" className="btn quick-lnk">
												<span>Contact us</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="top-screen-image">
					<img src="/img/inner/2.jpeg" alt="image" className="mobile" />
					<img src="/img/inner/1.jpeg" alt="image" className="desctop" />
				</div>
			</div>
		</div>
	);
}
