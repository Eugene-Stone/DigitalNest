import { createContext, useState, useEffect } from 'react';
import { Lang } from '../types';

type LanguageContextType = {
	currentLang: Lang;
	setCurrentLang: React.Dispatch<React.SetStateAction<boolean>>;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageProvider({ children }: React.PropsWithChildren) {
	const [currentLang, setCurrentLang] = useState(() => {
		const savedLang = localStorage.getItem('lang');

		return savedLang ? JSON.parse(savedLang) : 'en';
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
