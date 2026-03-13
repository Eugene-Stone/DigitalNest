import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { ScrollToSectionLink } from '../ScrollToSectionLink/ScrollToSectionLink';

export default function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const handleToggleMenu = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	useEffect(() => {
		const menu = document.querySelector('.mnu-wrap');

		if (menuIsOpen) {
			// menu.style.display = 'block';
			document.body.classList.add('mnu-open');
		}
		return () => {
			// menu.style.display = 'none';
			document.body.classList.remove('mnu-open');
		};
	}, [menuIsOpen]); // Rerun effect if className changes

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
							<nav
								className={`mnu-wrap ${menuIsOpen ? 'open' : ''}`}
								style={menuIsOpen ? { display: 'block' } : {}}>
								<div className="mnu-wrap-inner">
									<ul className="main-mnu scroll-lnks container">
										<li>
											<ScrollToSectionLink
												to="sect-about"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												About
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-service"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												Services
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-why-us"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												Why DigitalNest?
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-gallery"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												Showcase
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-how-we-work"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												Workflow
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="sect-contacts"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												Contacts
											</ScrollToSectionLink>
										</li>
									</ul>
									<div className="btn-wrap-mobile">
										<div className="container">
											<ScrollToSectionLink
												to="sect-contacts"
												className="btn"
												setMenuIsOpen={setMenuIsOpen}>
												<span>Contact us</span>
											</ScrollToSectionLink>
										</div>
									</div>
								</div>
							</nav>

							<button
								className={`toggle-btn ${menuIsOpen ? 'on' : ''}`}
								onClick={handleToggleMenu}>
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
