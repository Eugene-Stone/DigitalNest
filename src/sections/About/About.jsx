import { useSectionData } from '../../hooks/useSectionData';

export default function About() {
	const { section, loading, errorData } = useSectionData('/about');

	if (!section) return null;

	if (loading) {
		return <div>Loading...</div>;
	}

	if (errorData) {
		return <div>Error fetch data</div>;
	}

	const { id, title, content, images } = section || {};

	return (
		<section id={id} className="sect-about">
			<div className="container">
				<div className="sect-about-title">
					<div className="row">
						<div className="col-lg-3">
							<h2 className="h2-title">
								<strong>{title}</strong>
							</h2>
						</div>
						<div className="col-lg-9">
							<div className="title-descr-big">
								<p>{content[0]}</p>
							</div>
							<div className="title-descr">
								<p>{content[1]}</p>
								<p>{content[2]}</p>
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
