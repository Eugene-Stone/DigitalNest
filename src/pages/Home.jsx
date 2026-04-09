import { request } from '../api/request.js';
import { useEffect, useState } from 'react';

import Hero from '../sections/Hero/Hero.jsx';
import About from '../sections/About/About.jsx';
import Services from '../sections/Services/Services.jsx';
import Reviews from '../sections/Reviews/Reviews.jsx';
import Contacts from '../sections/Contacts/Contacts.jsx';

import Features from '../sections/Features/Features.jsx';
import Projects from '../sections/Projects/Projects.jsx';
import Workflow from '../sections/Workflow/Workflow';

import useLanguageContext from '../context/useLanguageContext.js';

const sectionComponents = {
	hero: Hero,
	about: About,
	services: Services,
	features: Features,
	projects: Projects,
	workflow: Workflow,
	reviews: Reviews,
	contacts: Contacts,
};

export default function Home() {
	const storageKey = 'homePageData';

	const [page, setPage] = useState(() => {
		// const cached = localStorage.getItem(storageKey);
		// return cached ? JSON.parse(cached) : null;

		// С проверкой на случай битого кеша
		try {
			const cached = localStorage.getItem(storageKey);
			return cached ? JSON.parse(cached) : null;
		} catch {
			localStorage.removeItem(storageKey);
			return null;
		}
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
