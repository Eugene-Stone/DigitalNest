import { useLocation, useNavigate } from 'react-router';
import { Link, scroller } from 'react-scroll';

export const ScrollToSectionLink = ({ className, to, children, setMenuIsOpen }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleSetActive = (to) => {
		// console.log(to);
	};

	const closeMenu = () => {
		if (setMenuIsOpen) {
			setMenuIsOpen(false);
		}
	};

	const scrollToSection = (to) => {
		navigate('/');

		setTimeout(() => {
			scroller.scrollTo(to, {
				smooth: true,
				offset: -150,
				duration: 900,
			});
		}, 500);
	};

	if (location.pathname === '/') {
		return (
			<Link
				className={className}
				to={to}
				spy={true}
				activeClass="active"
				onSetActive={handleSetActive}
				smooth={true}
				offset={-150}
				duration={900}
				onClick={closeMenu}>
				{children}
			</Link>
		);
	} else {
		return (
			<button className={className} onClick={() => (closeMenu(), scrollToSection(to))}>
				{children}
			</button>
		);
	}
};
