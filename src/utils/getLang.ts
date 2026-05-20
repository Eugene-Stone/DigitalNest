type Lang = 'en' | 'ru';

type Field = {
	en?: string;
	ru?: string;
};

export default function getLang(field: Field, lang: Lang) {
	// return field?.[lang.toLowerCase()] || field?.en || 'not translation';
	return field?.[lang] || field?.en || 'not translation';
}
