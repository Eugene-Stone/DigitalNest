import React from 'react';

export default function Header() {
	return (
		<header className="head-general">
			<div className="head-top ">
				<div className="container">
					<div className="head-line">
						<div className="head-cell">
							<div className="logo-wrap">
								<a href="/" className="logo">
									<img src="/logo.svg" alt="logo" />
								</a>
							</div>
						</div>
						<div className="head-cell">
							<nav className="mnu-wrap">
								<div className="mnu-wrap-inner">
									<ul className="main-mnu scroll-lnks container">
										<li>
											<a href="#sect-about">About</a>
										</li>
										<li>
											<a href="#sect-service">Services</a>
										</li>
										<li>
											<a href="#sect-why-us">Why DigitalNest?</a>
										</li>
										<li>
											<a href="#sect-gallery">Showcase</a>
										</li>
										<li>
											<a href="#sect-how-we-work">Workflow</a>
										</li>
										<li>
											<a href="#sect-contacts">Contacts</a>
										</li>
									</ul>
									<div className="btn-wrap-mobile">
										<div className="container">
											<a href="#sect-contacts" className="btn quick-lnk">
												<span>Contact us</span>
											</a>
										</div>
									</div>
								</div>
							</nav>

							<button className="toggle-btn">
								<span className="toggle-btn-inner">
									<span />
									<span className="toggle-btn-hover" />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
