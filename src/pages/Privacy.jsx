import { useSectionData } from '../hooks/useSectionData';
import TitleHtml from '../utils/TitleHtml';
import useLanguageContext from '../context/useLanguageContext';
import getLang from '../utils/getLang.js';

export default function Privacy() {
	const { section, loading, errorData } = useSectionData('/privacy');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	if (loading) {
		return <div>Loading Services...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, description, content } = section || {};

	return (
		<section className="sect-txt">
			<div className="container">
				<div className="title-sect">
					<TitleHtml TitleHtml="h1" titleClass="h1-title">
						{getLang(title, currentLang)}
					</TitleHtml>
					<div className="title-descr">
						{description.map((p, index) => {
							return <p key={index}>{getLang(p, currentLang)}</p>;
						})}
					</div>
				</div>
				<div className="txt-box">
					<div className="row justify-content-center">
						<div className="col-lg-12">
							{content.map((block, index) => {
								const text = block.text ? getLang(block.text, currentLang) : '';

								switch (block.type) {
									case 'h1':
										return <h1 key={index}>{text}</h1>;
									case 'h2':
										return <h2 key={index}>{text}</h2>;
									case 'h3':
										return <h3 key={index}>{text}</h3>;
									case 'h4':
										return <h4 key={index}>{text}</h4>;
									case 'h5':
										return <h5 key={index}>{text}</h5>;
									case 'h6':
										return <h6 key={index}>{text}</h6>;
									case 'p':
										return (
											<p
												key={index}
												dangerouslySetInnerHTML={{ __html: text }}
											/>
										);

									case 'ol':
										return (
											<ol key={index}>
												{block.items.map((item, i) => (
													<li
														key={i}
														dangerouslySetInnerHTML={{
															__html: getLang(item, currentLang),
														}}
													/>
												))}
											</ol>
										);

									case 'ul':
										return (
											<ul key={index}>
												{block.items.map((item, i) => (
													<li
														key={i}
														dangerouslySetInnerHTML={{
															__html: getLang(item, currentLang),
														}}
													/>
												))}
											</ul>
										);

									case 'img':
										return (
											<p key={index}>
												<img
													src={block.src}
													alt={getLang(block.alt, currentLang)}
												/>
											</p>
										);

									default:
										return null;
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
