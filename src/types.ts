export type Lang = 'en' | 'ru';

export type FieldLang = {
	en?: string;
	ru?: string;
};

export type TitleHtmlType = {
	children: string;
	titleTag?: React.ElementType;
	titleClass: string;
};

export type TranslateField = FieldLang;

export type ContentType = {
	type: string;
	text: TranslateField;
};

export type SectionType = {
	id: string;
	title?: TranslateField;
	subtitle?: TranslateField;
	description?: TranslateField;
	content?: TranslateField | ContentType[];
	buttonText?: TranslateField;
	backgroundImage?: string;
};
