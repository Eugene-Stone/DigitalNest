import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import WhyUs from './components/WhyUs/WhyUs';
import Gallery from './components/Gallery/Gallery';
import HowWeWork from './components/HowWeWork/HowWeWork';
import Reviews from './components/Reviews/Reviews';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />

			<div className="layout">
				<main className="page-wrap">
					<Hero />

					<About />

					<Services />

					<WhyUs />

					<Gallery />

					<HowWeWork />

					<Reviews />

					<Contacts />
				</main>
			</div>

			<Footer />
		</>
	);
}

export default App;
