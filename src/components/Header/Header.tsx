import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { ScrollToSectionLink } from '../ScrollToSectionLink/ScrollToSectionLink';
import useLanguageContext from '../../context/useLanguageContext';
import { Lang } from '../../types.ts';

export default function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const { currentLang, setCurrentLang } = useLanguageContext();

	// console.log(currentLang);

	const langList: Lang[] = ['en', 'ru'];

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
									<img src={`${import.meta.env.BASE_URL}/logo.svg`} alt="logo" />
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
												to="about"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												{currentLang === 'ru' ? 'О нас' : 'About'}
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="services"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												{currentLang === 'ru' ? 'Сервисы' : 'Services'}
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="features"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												{currentLang === 'ru'
													? 'Почему мы'
													: 'Why DigitalNest?'}
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="gallery"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												{currentLang === 'ru' ? 'Галлерея' : 'Showcase'}
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="how-we-work"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												{currentLang === 'ru' ? 'Воркфлоу' : 'Workflow'}
											</ScrollToSectionLink>
										</li>
										<li>
											<ScrollToSectionLink
												to="contacts"
												className="menu__link"
												setMenuIsOpen={setMenuIsOpen}>
												{currentLang === 'ru' ? 'Контакты' : 'Contacts'}
											</ScrollToSectionLink>
										</li>
									</ul>
									<div className="btn-wrap-mobile">
										<div className="container">
											<ScrollToSectionLink
												to="contacts"
												className="btn"
												setMenuIsOpen={setMenuIsOpen}>
												<span>
													{currentLang === 'ru'
														? 'Связаться'
														: 'Contact us'}
												</span>
											</ScrollToSectionLink>
										</div>
									</div>
								</div>
							</nav>

							<ul className="head-sett">
								<li className="lang-choose hover-dropdown ">
									<div className="hover-dropdown-btn">
										<span>{currentLang}</span>
										<i className="hover-dropdown-ic">
											<svg
												width={24}
												height={25}
												viewBox="0 0 24 25"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M3.87039 6.66504L2.10039 8.43504L12.0004 18.335L21.9004 8.43504L20.1304 6.66504L12.0004 14.795L3.87039 6.66504V6.66504Z"
													fill="currentColor"
												/>
											</svg>
										</i>
									</div>
									<div className="lang-lst hover-dropdown-box">
										<div className="hover-dropdown-inner">
											<ul>
												{langList.map((langItem, index) => {
													return (
														<li key={langItem}>
															<button
																className={
																	currentLang === langItem
																		? 'active'
																		: ''
																}
																onClick={() =>
																	setCurrentLang(langItem)
																}>
																{langItem}
															</button>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</li>
							</ul>

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
