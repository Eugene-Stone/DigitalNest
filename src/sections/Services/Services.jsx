import { ScrollToSectionLink } from '../../components/ScrollToSectionLink/ScrollToSectionLink';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';

export default function Services() {
	const { section, loading, errorData } = useSectionData('/services');

	if (!section) return null;

	if (loading) {
		return <div>Loading...</div>;
	}

	if (errorData) {
		return <div>Error fetch data</div>;
	}

	const { id, title, description, content } = section || {};

	return (
		<section id={id} className="sect-service">
			<div className="container">
				<div className="title-sect">
					<div className="row">
						<div className="col-xl-6">
							<TitleHtml titleClass="h2-title">{title}</TitleHtml>

							{description && (
								<div className="title-descr">
									{description.map((p, i) => {
										return <p key={i}>{p}</p>;
									})}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="service-lst-box">
					<div className="service-lst">
						<div className="row">
							{content.map((serv, i) => {
								if (serv.highlight === true && i === 0) {
									return (
										<div
											key={serv.id}
											className="col-12 service-itm service-itm-big">
											<div className="row align-items-center flex-lg-row-reverse">
												<div className="col-lg-6 service-image-cell">
													<div className="service-image">
														<img src={serv.image} alt={serv.title} />
													</div>
												</div>
												<div className="col-lg-6 service-txt-cell">
													<div className="service-itm-txt-inner">
														<div className="h3-title service-itm-number">
															{i < 10 ? `0${i + 1}` : i}
														</div>
														<div className="h3-title service-itm-title">
															{serv.title}
														</div>
														<div className="service-itm-brief">
															<p>{serv.description}</p>
														</div>
														<div className="btn-wrap">
															<ScrollToSectionLink
																to="gallery"
																className="btn">
																<span>Explore stack</span>
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
														{serv.title}
													</div>
													<div className="service-itm-brief">
														<p>{serv.description}</p>
													</div>
												</div>
											</div>
											<div className="col-6 service-image-cell">
												<div className="service-image">
													<img src={serv.image} alt={serv.title} />
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="btn-more-wrap center">
						<ScrollToSectionLink to="contacts" className="btn">
							<span>Get a quote</span>
						</ScrollToSectionLink>
					</div>
				</div>
			</div>
		</section>
	);
}
