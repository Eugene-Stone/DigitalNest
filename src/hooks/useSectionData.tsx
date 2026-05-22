import { useEffect, useState } from 'react';
import { request } from '../api/request';
import { TranslateField, ContentType, SectionType } from '../types.ts';

export function useSectionData(endpoint: string) {
	const storageKey = `sectionData${endpoint}`;

	const [section, setSection] = useState<SectionType | null>(() => {
		const cached = localStorage.getItem(storageKey);
		return cached ? JSON.parse(cached) : null;
	});

	const [loading, setLoading] = useState(!section);
	const [errorData, setErrorData] = useState<string | null>(null);

	useEffect(() => {
		let isCancelled = false;

		async function fetchData() {
			try {
				const data = await request<SectionType>(`${endpoint}`, {
					method: 'GET',
				});

				if (!isCancelled) {
					setSection(data);
					localStorage.setItem(`sectionData${endpoint}`, JSON.stringify(data));
				}
			} catch (error) {
				if (!isCancelled) {
					setErrorData(error as string);
				}
			} finally {
				if (!isCancelled) {
					setLoading(false);
				}
			}
		}

		fetchData();
		return () => {
			isCancelled = true;
		};
	}, [endpoint]);

	return { section, loading, errorData };
}
