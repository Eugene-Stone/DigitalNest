import { TitleHtmlType } from '../types.ts';

export default function TitleHtml({ children, titleTag: Tag = 'h2', titleClass }: TitleHtmlType) {
	// const Tag = titleTag;

	return <Tag className={titleClass} dangerouslySetInnerHTML={{ __html: children }} />;
}
