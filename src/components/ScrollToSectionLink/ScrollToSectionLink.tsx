import { ReactNode, Dispatch, SetStateAction } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link, scroller } from 'react-scroll';

type ScrollToSectionLinkType = {
	className: string;
	to: string;
	children: ReactNode;
	setMenuIsOpen?: Dispatch<SetStateAction<boolean>>;
};

export const ScrollToSectionLink = ({
	className,
	to,
	children,
	setMenuIsOpen,
}: ScrollToSectionLinkType) => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleSetActive = (to: string) => {
		// console.log(to);
	};

	const closeMenu = () => {
		if (setMenuIsOpen) {
			setMenuIsOpen(false);
		}
	};

	const scrollToSection = (to: string) => {
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
