import { useSectionData } from '../../hooks/useSectionData';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang.js';

export default function About() {
	const { section, loading, errorData } = useSectionData('/about');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	if (loading) {
		return <div>Loading About...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, content, images } = section || {};

	return (
		<section id={id} className="sect-about">
			<div className="container">
				<div className="sect-about-title">
					<div className="row">
						<div className="col-lg-3">
							<h2 className="h2-title">
								<strong>{getLang(title, currentLang)}</strong>
							</h2>
						</div>
						<div className="col-lg-9">
							<div className="title-descr-big">
								<p>{getLang(content[0], currentLang)}</p>
							</div>
							<div className="title-descr">
								<p>{getLang(content[1], currentLang)}</p>
								<p>{getLang(content[2], currentLang)}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="about-images-line">
					<div className="row justify-content-end">
						<div className="col-md-3">
							<div className="about-author-line">
								<div className="row align-items-end">
									<div className="col-6 col-md-12"></div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="about-image">
								<img src={images[0]} alt="image" />
							</div>
						</div>
						<div className="col-6 col-md-3 align-self-end">
							<div className="about-image">
								<img src={images[1]} alt="image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
