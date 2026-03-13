import { Outlet } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTOp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Layout() {
	return (
		<>
			<ScrollToTop />
			<Header />

			<div className="layout">
				<main className="page-wrap">
					<Outlet
						context={
							{
								// searchQueryDebounce,
								// searchQuery,
							}
						}
					/>
				</main>
			</div>

			<Footer />
		</>
	);
}
