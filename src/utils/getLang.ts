import { Lang, FieldLang } from '../types';

export default function getLang(field?: FieldLang, lang: Lang = 'en'): string {
	// return field?.[lang.toLowerCase()] || field?.en || 'not translation';
	return field?.[lang] || field?.en || 'not translation';
}
