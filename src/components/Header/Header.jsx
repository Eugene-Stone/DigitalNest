import { NavLink } from 'react-router';
import { Link } from 'react-scroll';

export default function Header() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Smooth scrolling behavior
		});
	};

	const handleSetActive = (to) => {
		console.log(to);
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
											<Link
												to="sect-about"
												spy={true}
												activeClass="active"
												onSetActive={handleSetActive}
												smooth={true}
												offset={-150}
												duration={500}>
												About
											</Link>
										</li>
										<li>
											<Link
												to="sect-service"
												spy={true}
												activeClass="active"
												onSetActive={handleSetActive}
												smooth={true}
												offset={-150}
												duration={500}>
												Services
											</Link>
										</li>
										<li>
											<Link
												to="sect-why-us"
												spy={true}
												activeClass="active"
												onSetActive={handleSetActive}
												smooth={true}
												offset={-150}
												duration={500}>
												Why DigitalNest?
											</Link>
										</li>
										<li>
											<Link
												to="sect-gallery"
												spy={true}
												activeClass="active"
												onSetActive={handleSetActive}
												smooth={true}
												offset={-150}
												duration={500}>
												Showcase
											</Link>
										</li>
										<li>
											<Link
												to="sect-how-we-work"
												spy={true}
												activeClass="active"
												onSetActive={handleSetActive}
												smooth={true}
												offset={-150}
												duration={500}>
												Workflow
											</Link>
										</li>
										<li>
											<Link
												to="sect-contacts"
												spy={true}
												activeClass="active"
												onSetActive={handleSetActive}
												smooth={true}
												offset={-150}
												duration={500}>
												Contacts
											</Link>
										</li>
									</ul>
									<div className="btn-wrap-mobile">
										<div className="container">
											<Link
												to="#sect-contacts"
												smooth={true}
												duration={500}
												className="btn">
												<span>Contact us</span>
											</Link>
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
