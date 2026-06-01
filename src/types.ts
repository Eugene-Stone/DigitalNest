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

export type FeatureContent = {
	type: 'feature';
	id: string;
	title: TranslateField;
	description: TranslateField;
};

export type ReviewContent = {
	type: 'reviews';
	id: string;
	name: string;
	avatar: string;
	position: TranslateField;
	date: TranslateField;
	textReview: TranslateField[];
};

export type WorkflowContent = {
	type: 'workflow';
	id: string;
	step: string;
	title: TranslateField;
	description: TranslateField;
};

export type ServiceContent = {
	type: 'service';
	id: string;
	title: TranslateField;
	description: TranslateField;
	image: string;
	buttonCard?: TranslateField;
	highlight?: boolean;
};

export type ContentType =
	| TextContent
	| ListContent
	| ImageContent
	| FeatureContent
	| ReviewContent
	| WorkflowContent
	| ServiceContent;

type IconSocialType = {
	type: string;
	link: string;
	icon: string;
};

export type SectionType = {
	id: string;
	title?: TranslateField;
	subtitle?: TranslateField;
	description?: TranslateField[];
	descriptionBottom?: TranslateField[];
	content?: ContentType[];
	buttonText?: TranslateField;
	backgroundImage?: string;
	titleForm?: TranslateField;
	phone?: number;
	email?: string;
	social?: IconSocialType[];
	images?: string[];
};
