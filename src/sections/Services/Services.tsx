import { ScrollToSectionLink } from '../../components/ScrollToSectionLink/ScrollToSectionLink';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang';

export default function Services() {
	const { section, loading, errorData } = useSectionData('/services');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	if (loading) {
		return <div>Loading Services...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, description, content, buttonText } = section || {};

	return (
		<section id={id} className="sect-service">
			<div className="container">
				<div className="title-sect">
					<div className="row">
						<div className="col-xl-6">
							<TitleHtml titleTag="h2" titleClass="h2-title">
								{getLang(title, currentLang)}
							</TitleHtml>

							{description && (
								<div className="title-descr">
									{description.map((p, i) => {
										return <p key={i}>{getLang(p, currentLang)}</p>;
									})}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="service-lst-box">
					<div className="service-lst">
						<div className="row">
							{content?.map((serv, i) => {
								switch (serv.type) {
									case 'service':
										if (serv.highlight === true && i === 0) {
											return (
												<div
													key={serv.id}
													className="col-12 service-itm service-itm-big">
													<div className="row align-items-center flex-lg-row-reverse">
														<div className="col-lg-6 service-image-cell">
															<div className="service-image">
																<img
																	src={serv.image}
																	alt={getLang(
																		serv.title,
																		currentLang,
																	)}
																/>
															</div>
														</div>
														<div className="col-lg-6 service-txt-cell">
															<div className="service-itm-txt-inner">
																<div className="h3-title service-itm-number">
																	{i < 10 ? `0${i + 1}` : i}
																</div>
																<div className="h3-title service-itm-title">
																	{getLang(
																		serv.title,
																		currentLang,
																	)}
																</div>
																<div className="service-itm-brief">
																	<p>
																		{getLang(
																			serv.description,
																			currentLang,
																		)}
																	</p>
																</div>
																<div className="btn-wrap">
																	<ScrollToSectionLink
																		to="gallery"
																		className="btn">
																		<span>
																			{getLang(
																				serv.buttonCard,
																				currentLang,
																			)}
																		</span>
																	</ScrollToSectionLink>
																</div>
															</div>
														</div>
													</div>
												</div>
											);
										}

										return (
											<div key={serv.id} className="col-lg-6 service-itm">
												<div className="row">
													<div className="col-6 service-txt-cell">
														<div className="service-itm-txt-inner">
															<div className="h3-title service-itm-number">
																{i < 10 ? `0${i + 1}` : i}
															</div>
															<div className="h3-title service-itm-title">
																{getLang(serv.title, currentLang)}
															</div>
															<div className="service-itm-brief">
																<p>
																	{getLang(
																		serv.description,
																		currentLang,
																	)}
																</p>
															</div>
														</div>
													</div>
													<div className="col-6 service-image-cell">
														<div className="service-image">
															<img
																src={serv.image}
																alt={getLang(
																	serv.title,
																	currentLang,
																)}
															/>
														</div>
													</div>
												</div>
											</div>
										);

									default:
										return null;
								}
							})}
						</div>
					</div>
					<div className="btn-more-wrap center">
						<ScrollToSectionLink to="contacts" className="btn">
							<span>{getLang(buttonText, currentLang)}</span>
						</ScrollToSectionLink>
					</div>
				</div>
			</div>
		</section>
	);
}
