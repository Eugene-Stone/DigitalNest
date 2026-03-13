import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Contacts from '../../components/Contacts/Contacts';
import WhyUs from '../../components/WhyUs/WhyUs';
import Gallery from '../../components/Gallery/Gallery';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import Reviews from '../../components/Reviews/Reviews';

export default function Home() {
	return (
		<>
			<Hero />

			<About />

			<Services />

			<WhyUs />

			<Gallery />

			<HowWeWork />

			<Reviews />

			<Contacts />
		</>
	);
}
