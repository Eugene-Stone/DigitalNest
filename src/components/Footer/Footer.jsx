import { Link } from 'react-router';
import useLanguageContext from '../../context/useLanguageContext';

export default function Footer() {
	const { currentLang } = useLanguageContext();
	return (
		<>
			<footer className="foot-general">
				<div className="container">
					<div className="foot-bottom">
						<div className="row">
							<div className="col-6">
								<div className="copyright">
									{currentLang === 'Ru'
										? 'Авторские права © DigitalNest 2022, <br />Все права защищены.'
										: 'Copyright © DigitalNest 2022, <br />All rights reserved.'}
								</div>
							</div>
							<div className="col-6 right">
								<Link to="/privacy">
									{currentLang === 'Ru' ? 'Конфиденциальность' : 'Privacy'}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
