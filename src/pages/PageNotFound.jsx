import { Link } from 'react-router-dom';
import useLanguageContext from '../context/useLanguageContext';

export default function NotFoundPage() {
	const { currentLang } = useLanguageContext();

	return (
		<section className="section page-404" style={{ textAlign: 'center' }}>
			<div className="container">
				<br />
				<h1>{currentLang === 'Ru' ? 'Страница не найдена' : 'Page not found'}</h1>
				<br />
				<div className="button__box">
					<Link to={'/'}>
						<button className="btn">
							{currentLang === 'Ru' ? 'На главную' : 'Go back home'}
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
