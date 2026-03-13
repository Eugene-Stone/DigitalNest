export default function TitleHtml({ children, titleTag = 'h2', titleClass }) {
	const Tag = titleTag;

	return <Tag className={titleClass} dangerouslySetInnerHTML={{ __html: children }} />;
}
