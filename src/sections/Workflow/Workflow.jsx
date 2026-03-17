import { ScrollToSectionLink } from '../../components/ScrollToSectionLink/ScrollToSectionLink';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';

export default function Workflow() {
	const { section, loading, errorData } = useSectionData('/workflow');

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
					<TitleHtml titleClass="h2-title">{title}</TitleHtml>

					{description && (
						<div className="title-descr">
							{description.map((p, i) => {
								return <p key={i}>{p}</p>;
							})}
						</div>
					)}
				</div>
				<div className="how-we-work-box">
					<div className="row justify-content-between">
						<div className="how-we-work-image-cell col-md-6">
							<div className="how-we-work-image">
								<img src="/img/inner/17.png" alt="Development Workflow" />
							</div>
						</div>
						<div className="how-we-work-txt-cell col-md-5 col-lg-6">
							<ul className="how-we-work-lst">
								{content.map((item, i) => {
									let number = i < 10 ? `0${i + 1}` : `${i + 1}`;
									return (
										<li key={i} className="how-we-work-itm">
											<div className="h3-title how-we-work-itm-number">
												{number}
											</div>
											<div className="h3-title how-we-work-itm-title">
												{item.title}
											</div>
											<div className="how-we-work-itm-brief">
												<p>{item.description}</p>
											</div>
										</li>
									);
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
								return <p key={i}>{d}</p>;
							})}
						</div>
					)}

					<ScrollToSectionLink className="btn" to="sect-contacts">
						<span>Start a project</span>
					</ScrollToSectionLink>
				</div>
			</div>
			{/* container END */}
		</section>
	);
}
