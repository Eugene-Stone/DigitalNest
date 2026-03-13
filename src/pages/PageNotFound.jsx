import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<section className="section page-404" style={{ textAlign: 'center' }}>
			<div className="container">
				<br />
				<h1>Page not found</h1>
				<br />
				<div className="button__box">
					<Link to={'/'}>
						<button className="btn">Go back home</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
