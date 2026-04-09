
export default function getLang(field, lang) {
	return field?.[lang.toLowerCase()] || field?.en || 'not translation';
}
