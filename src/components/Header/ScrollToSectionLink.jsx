import { useLocation, useNavigate } from 'react-router';
import { Link, scroller } from 'react-scroll';

export const ScrollToSectionLink = ({ className, to, children }) => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleSetActive = (to) => {
		console.log(to);
	};

	const scrollToSection = (to) => {
		navigate('/');

		setTimeout(() => {
			scroller.scrollTo(to, {
				smooth: true,
				offset: -150,
				duration: 700,
			});
		}, 100);
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
				duration={500}>
				{children}
			</Link>
		);
	} else {
		return (
			<button className={className} onClick={() => scrollToSection(to)}>
				{children}
			</button>
		);
	}
};
