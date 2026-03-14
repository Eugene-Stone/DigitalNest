import { ScrollToSectionLink } from '../../components/ScrollToSectionLink/ScrollToSectionLink';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';

export default function WhyUs() {
	const { section, loading, errorData } = useSectionData('/features');

	if (!section) return null;

	if (loading) {
		return <div>Loading...</div>;
	}

	if (errorData) {
		return <div>Error fetch data</div>;
	}

	const { id, title, content } = section || {};

	return (
		<section id={id} className="sect-why-us">
			<div className="container">
				<div className="title-sect center">
					<TitleHtml className="h2-title">{title}</TitleHtml>
				</div>
				<div className="why-us-lst-box">
					<div className="why-us-lst row">
						{content.map((item, i) => {
							return (
								<div key={item.id} className="why-us-itm col-6">
									<div className="why-us-itm-icon">
										<svg
											height="14"
											viewBox="0 0 14 14"
											width="14"
											xmlns="http://www.w3.org/2000/svg">
											<g fill="#fff">
												<rect height="14" rx="7" width="14" />
												<path d="m7 3a4 4 0 1 0 4 4 4 4 0 0 0 -4-4m0-3a7 7 0 1 1 -7 7 7 7 0 0 1 7-7z" />
											</g>
										</svg>
									</div>
									<div className="why-us-itm-title h3-title">{item.title}</div>
									<div className="why-us-itm-brief">
										<p>{item.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
