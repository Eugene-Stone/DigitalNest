export default function About() {
	return (
		<section id="sect-about" className="sect-about">
			<div className="container">
				<div className="sect-about-title">
					<div className="row">
						<div className="col-lg-3">
							<h2 className="h2-title">
								<strong>About</strong>
							</h2>
						</div>
						<div className="col-lg-9">
							<div className="title-descr-big">
								<p>
									DigitalNest — engineering resilient digital ecosystems powered
									by cloud computing, neural networks, and deep data analytics.
									Our mission is to fundamentally optimize business workflows,
									building high-performance environments through cutting-edge
									protocols and sophisticated system architecture.
								</p>
							</div>
							<div className="title-descr">
								<p>
									Leveraging nearly a decade of expertise in systems integration,
									we architect bespoke software products, scalable API frameworks,
									and secure automated databases. From startup platforms to
									enterprise portals and fintech solutions, we ensure a seamless
									synthesis of velocity, security, and stability.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="about-images-line">
					<div className="row justify-content-end">
						<div className="col-md-3">
							<div className="about-author-line">
								<div className="row align-items-end">
									<div className="col-6 col-md-12"></div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="about-image">
								<img src="/img/inner/4.png" alt="image" />
							</div>
						</div>
						<div className="col-6 col-md-3 align-self-end">
							<div className="about-image">
								<img src="/img/inner/5.png" alt="image" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* container END */}
		</section>
	);
}
