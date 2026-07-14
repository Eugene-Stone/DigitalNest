import { ScrollToSectionLink } from '../../components/ScrollToSectionLink/ScrollToSectionLink';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang';

export default function Workflow() {
	const { section, loading, errorData } = useSectionData('/workflow');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	if (loading) {
		return <div>Loading Services...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, description, descriptionBottom, content } = section || {};

	return (
		<section id="how-we-work" className="sect-how-we-work">
			<div className="container">
				<div className="title-sect center">
					<TitleHtml titleClass="h2-title">{getLang(title, currentLang)}</TitleHtml>

					{description && (
						<div className="title-descr">
							{description.map((p, i) => {
								return <p key={i}>{getLang(p, currentLang)}</p>;
							})}
						</div>
					)}
				</div>
				<div className="how-we-work-box">
					<div className="row justify-content-between">
						<div className="how-we-work-image-cell col-md-6">
							<div className="how-we-work-image">
								<img
									src={`${import.meta.env.BASE_URL}/img/inner/17.png`}
									alt="Development Workflow"
								/>
							</div>
						</div>
						<div className="how-we-work-txt-cell col-md-5 col-lg-6">
							<ul className="how-we-work-lst">
								{content?.map((item, i) => {
									let number = i < 10 ? `0${i + 1}` : `${i + 1}`;

									switch (item.type) {
										case 'workflow':
											return (
												<li key={i} className="how-we-work-itm">
													<div className="h3-title how-we-work-itm-number">
														{number}
													</div>
													<div className="h3-title how-we-work-itm-title">
														{getLang(item.title, currentLang)}
													</div>
													<div className="how-we-work-itm-brief">
														<p>
															{getLang(item.description, currentLang)}
														</p>
													</div>
												</li>
											);

										default:
											return null;
									}
								})}
							</ul>
							{/* how-we-work-lst */}
						</div>
					</div>
				</div>
				<div className="btn-more-wrap center">
					{descriptionBottom && (
						<div className="button-description">
							{descriptionBottom.map((d, i) => {
								return <p key={i}>{getLang(d, currentLang)}</p>;
							})}
						</div>
					)}

					<ScrollToSectionLink className="btn" to="sect-contacts">
						<span>{currentLang === 'ru' ? 'Начать проект' : 'Start a project'}</span>
					</ScrollToSectionLink>
				</div>
			</div>
			{/* container END */}
		</section>
	);
}
