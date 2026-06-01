import { useSectionData } from '../../hooks/useSectionData';
import { ScrollToSectionLink } from '../../components/ScrollToSectionLink/ScrollToSectionLink';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang';

export default function Hero() {
	const { section, loading, errorData } = useSectionData('/hero');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	if (loading) {
		return <div>Loading Hero...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

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
											{getLang(title, currentLang)} <br />
											{getLang(subtitle, currentLang)}
										</h1>
									</div>
								</div>
							</div>
							<div className="top-screen-txt-bottom">
								<div className="row">
									<div className="col-lg-8 col-xl-6">
										<div className="top-screen-txt-brief">
											{description?.map((descrItem, index) => {
												return (
													<p key={index}>
														{getLang(descrItem, currentLang)}
													</p>
												);
											})}
										</div>
									</div>
									<div className="col-lg-4 col-xl-6">
										<div className="btn-wrap">
											<ScrollToSectionLink to="sect-contacts" className="btn">
												<span>{getLang(buttonText, currentLang)}</span>
											</ScrollToSectionLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="top-screen-image">
					<img src={backgroundImage} alt="image" width={1000} height={562} />
				</div>
			</div>
		</div>
	);
}
