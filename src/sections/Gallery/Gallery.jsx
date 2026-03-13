import React from 'react';

export default function Gallery() {
	return (
		<section id="sect-gallery" className="sect-gallery">
			<div className="container">
				<div className="title-sect center">
					<h2 className="h2-title">
						<strong>Showcase</strong>
					</h2>
					<div className="title-descr">
						<p>Explore our recent digital deployments and architecture solutions.</p>
					</div>
				</div>
				<div className="gallery-box">
					<div className="gallery-filters">
						<ul className="gallery-filters-lst">
							<li className="active">
								<a href="#">Web Interfaces</a>
							</li>
							<li>
								<a href="#">Cloud Systems</a>
							</li>
							<li>
								<a href="#">Mobile Apps</a>
							</li>
							<li>
								<a href="#">Data Analytics</a>
							</li>
							<li>
								<a href="#">UI/UX Prototypes</a>
							</li>
						</ul>
					</div>
					<div className="gallery row">
						{/* Структура сохранена для корректного отображения сетки */}
						<div className="gallery-itm col-6">
							<a
								href="/img/inner/13.png"
								data-thumb="/img/inner/13.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/13.png" alt="Cloud Dashboard" />
							</a>
						</div>
						<div className="gallery-itm col-6">
							<a
								href="/img/inner/12.png"
								data-thumb="/img/inner/12.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/12.png" alt="SaaS Application" />
							</a>
						</div>
						<div className="gallery-itm col-12 col-sm-6">
							<a
								href="/img/inner/11.png"
								data-thumb="/img/inner/11.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/11.png" alt="Enterprise Portal" />
							</a>
						</div>
						<div className="gallery-itm col-6 col-sm-3">
							<a
								href="/img/inner/14.png"
								data-thumb="/img/inner/14.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/14.png" alt="Mobile UI" />
							</a>
						</div>
						<div className="gallery-itm col-6 col-sm-3">
							<a
								href="/img/inner/15.png"
								data-thumb="/img/inner/15.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/15.png" alt="E-commerce Logic" />
							</a>
						</div>
						{/* Скрытые элементы для демонстрации расширенной галереи */}
						<div className="gallery-itm col-6 hidden">
							<a
								href="/img/inner/13.png"
								data-thumb="/img/inner/13.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/13.png" alt="Infrastructure Map" />
							</a>
						</div>
						<div className="gallery-itm col-6 hidden">
							<a
								href="/img/inner/12.png"
								data-thumb="/img/inner/12.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/12.png" alt="CRM System" />
							</a>
						</div>
						<div className="gallery-itm col-12 col-sm-6 hidden">
							<a
								href="/img/inner/11.png"
								data-thumb="/img/inner/11.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/11.png" alt="Security Protocol" />
							</a>
						</div>
						<div className="gallery-itm col-6 col-sm-3 hidden">
							<a
								href="/img/inner/14.png"
								data-thumb="/img/inner/14.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/14.png" alt="API Monitoring" />
							</a>
						</div>
						<div className="gallery-itm col-6 col-sm-3 hidden">
							<a
								href="/img/inner/15.png"
								data-thumb="/img/inner/15.png"
								className="gallery-image fancy-photo"
								data-fancybox="fancy_gallery">
								<img src="/img/inner/15.png" alt="DevOps Workflow" />
							</a>
						</div>
					</div>
					<div className="btn-more-wrap center">
						<a href="#" className="btn-link">
							<span>View all projects</span>
							<i className="btn-ic">
								<svg
									width={24}
									height={25}
									viewBox="0 0 24 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.87039 6.66504L2.10039 8.43504L12.0004 18.335L21.9004 8.43504L20.1304 6.66504L12.0004 14.795L3.87039 6.66504V6.66504Z"
										fill="currentColor"
									/>
								</svg>
							</i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
