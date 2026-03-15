import { request } from '../../api/request.js';
import { useEffect, useState } from 'react';

import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Services from '../../sections/Services/Services';
import Reviews from '../../sections/Reviews/Reviews';
import Contacts from '../../sections/Contacts/Contacts';

import WhyUs from '../../sections/WhyUs/WhyUs';
import Gallery from '../../sections/Gallery/Gallery';
import HowWeWork from '../../sections/HowWeWork/HowWeWork';

const sectionComponents = {
	hero: Hero,
	about: About,
	services: Services,
	features: WhyUs,
	projects: Gallery,
	workflow: HowWeWork,
	reviews: Reviews,
	contacts: Contacts,
};

export default function Home() {
	const storageKey = 'homePageData';

	const [page, setPage] = useState(() => {
		const cached = localStorage.getItem(storageKey);
		return cached ? JSON.parse(cached) : null;
	});

	const [errorData, setErrorData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await request('/pages/home', {
					method: 'GET',
				});

				setPage(data);
				localStorage.setItem(storageKey, JSON.stringify(data));
			} catch (error) {
				setErrorData(error);
			} finally {
				// setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (errorData) {
		return <div>Error loading page</div>;
	}

	if (!page) {
		return <div>Loading HomePage...</div>;
	}

	return (
		<>
			{page.sections.map((sectionName) => {
				const SectionComponent = sectionComponents[sectionName];

				if (!SectionComponent) return null;

				return <SectionComponent key={sectionName} />;
			})}
		</>
	);
}
