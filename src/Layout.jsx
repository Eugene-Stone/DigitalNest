import { Outlet } from 'react-router-dom';
import ReloadToTop from './utils/ReloadToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ButtonScrollTop from './components/ButtonScrollTop/ButtonScrollTop';

export default function Layout() {
	return (
		<>
			<ReloadToTop />
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
			<ButtonScrollTop />
		</>
	);
}
