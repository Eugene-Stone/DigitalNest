import { request } from '../api/request';
import { useEffect, useState, ComponentType } from 'react';

import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import Reviews from '../sections/Reviews/Reviews';
import Contacts from '../sections/Contacts/Contacts';

import Features from '../sections/Features/Features';
import Projects from '../sections/Projects/Projects';
import Workflow from '../sections/Workflow/Workflow';

type sectionComponentsType = {
	hero: ComponentType;
	about: ComponentType;
	services: ComponentType;
	features: ComponentType;
	projects: ComponentType;
	workflow: ComponentType;
	reviews: ComponentType;
	contacts: ComponentType;
};

type SectionNameType = keyof typeof sectionComponents;

type PageDataType = {
	sections: SectionNameType[];
};

const sectionComponents: sectionComponentsType = {
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

	const [page, setPage] = useState<PageDataType | null>(() => {
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

	const [errorData, setErrorData] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const data: PageDataType = await request('/pages/home', {
					method: 'GET',
				});

				setPage(data);
				localStorage.setItem(storageKey, JSON.stringify(data));
			} catch (error) {
				setErrorData(error as string);
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
			{page.sections.map((sectionName: SectionNameType) => {
				const SectionComponent = sectionComponents[sectionName];

				if (!SectionComponent) return null;

				return <SectionComponent key={sectionName} />;
			})}
		</>
	);
}
