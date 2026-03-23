import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export default function LanguageProvider({ children }) {
	const [currentLang, setCurrentLang] = useState(() => {
		const savedLang = localStorage.getItem('lang');

		return savedLang ? JSON.parse(savedLang) : 'En';
	});

	useEffect(() => {
		localStorage.setItem('lang', JSON.stringify(currentLang));
	}, [currentLang]);

	useEffect(() => {
		document.documentElement.lang = currentLang.toLowerCase();
	}, [currentLang]);

	return (
		<LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
			{children}
		</LanguageContext.Provider>
	);
}

export { LanguageContext };
