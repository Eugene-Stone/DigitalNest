import { useSectionData } from '../../hooks/useSectionData';
import { ScrollToSectionLink } from '../../components/ScrollToSectionLink/ScrollToSectionLink';

export default function Hero() {
	const { section, loading, errorData } = useSectionData('/hero');

	if (!section) return null;

	if (loading) {
		return <div>Loading...</div>;
	}

	if (errorData) {
		return <div>Error fetch data</div>;
	}

	const { id, title, subtitle, description, buttonText, backgroundImage } = section || {};

	return (
		<div id={id} className="top-screen">
			<div className="top-screen-inner">
				<div className="top-screen-txt-box">
					<div className="container">
						<div className="top-screen-txt">
							<div className="top-screen-txt-top">
								<div className="row">
									<div className="col-xl-9">
										<h1 className="h1-title">
											{title}
											{subtitle}
										</h1>
									</div>
								</div>
							</div>
							<div className="top-screen-txt-bottom">
								<div className="row">
									<div className="col-lg-8 col-xl-6">
										<div className="top-screen-txt-brief">
											<p>{description}</p>
										</div>
									</div>
									<div className="col-lg-4 col-xl-6">
										<div className="btn-wrap">
											<ScrollToSectionLink to="sect-contacts" className="btn">
												<span>{buttonText}</span>
											</ScrollToSectionLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="top-screen-image">
					<img src={backgroundImage} alt="image" />
				</div>
			</div>
		</div>
	);
}
