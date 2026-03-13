import { NavLink } from 'react-router';
import { ScrollToSectionLink } from './ScrollToSectionLink';

export default function Header() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Smooth scrolling behavior
		});
	};

	return (
		<header className="head-general">
			<div className="head-top ">
				<div className="container">
					<div className="head-line">
						<div className="head-cell">
							<div className="logo-wrap">
								<NavLink to={'/'} className="logo" onClick={scrollToTop}>
									<img src="/logo.svg" alt="logo" />
								</NavLink>
							</div>
						</div>
						<div className="head-cell">
							<nav className="mnu-wrap">
								<div className="mnu-wrap-inner">
									<ul className="main-mnu scroll-lnks container">
										<li>
											<ScrollToSectionLink
												to="sect-about"
												className="menu__link">
												About
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-service"
												className="menu__link">
												Services
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-why-us"
												className="menu__link">
												Why DigitalNest?
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-gallery"
												className="menu__link">
												Showcase
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-how-we-work"
												className="menu__link">
												Workflow
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-contacts"
												className="menu__link">
												Contacts
											</ScrollToSectionLink>
										</li>
									</ul>
									<div className="btn-wrap-mobile">
										<div className="container">
											<ScrollToSectionLink to="sect-contacts" className="btn">
												<span>Contact us</span>
											</ScrollToSectionLink>
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
