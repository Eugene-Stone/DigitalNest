import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";


export default function useLanguageContext() {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("Error lang");
		
	}
	return context;
}
