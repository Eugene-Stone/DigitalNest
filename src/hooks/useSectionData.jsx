import { useEffect, useState } from 'react';
import { request } from '../api/request.js';

export function useSectionData(endpoint) {
	const [section, setSection] = useState(null);
	const [loading, setLoading] = useState(true);
	const [errorData, setErrorData] = useState(null);

	useEffect(() => {
		let isCancelled = false;

		async function fetchData() {
			try {
				const data = await request(`${endpoint}`, {
					method: 'GET',
				});

				if (!isCancelled) {
					setSection(data);
				}
			} catch (error) {
				if (!isCancelled) {
					setErrorData(error);
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
