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

export type ContentTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'ol' | 'ul' | 'img';

export type TextContent = {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
	text: TranslateField;
};

export type ListContent = {
	type: 'ol' | 'ul';
	items: TranslateField[];
};

export type ImageContent = {
	type: 'img';
	src: string;
	alt: TranslateField;
};

export type ContentType = TextContent | ListContent | ImageContent;

export type SectionType = {
	id: string;
	title?: TranslateField;
	subtitle?: TranslateField;
	description?: TranslateField[];
	content?: ContentType[];
	buttonText?: TranslateField;
	backgroundImage?: string;
	titleForm?: TranslateField;
};
