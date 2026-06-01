import sanitizeHtml from 'sanitize-html';

export function cleanText(value: unknown) {
	if (typeof value !== 'string') return '';
	return sanitizeHtml(value, { allowedTags: [], allowedAttributes: {} }).trim();
}

export function cleanHtml(value: unknown) {
	if (typeof value !== 'string') return '';
	return sanitizeHtml(value, {
		allowedTags: ['a', 'strong', 'em', 'br'],
		allowedAttributes: {
			a: ['href', 'target', 'rel']
		}
	}).trim();
}
