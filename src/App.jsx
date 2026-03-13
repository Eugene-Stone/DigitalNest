import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<>
				<header className="head-general">
					<div className="head-top ">
						<div className="container">
							<div className="head-line">
								<div className="head-cell">
									<div className="logo-wrap">
										<a href="/" className="logo">
											<img src="/logo.svg" alt="logo" />
										</a>
									</div>
								</div>
								<div className="head-cell">
									<nav className="mnu-wrap">
										<div className="mnu-wrap-inner">
											<ul className="main-mnu scroll-lnks container">
												<li>
													<a href="#sect-about">About</a>
												</li>
												<li>
													<a href="#sect-service">Services</a>
												</li>
												<li>
													<a href="#sect-why-us">Why DigitalNest?</a>
												</li>
												<li>
													<a href="#sect-gallery">Showcase</a>
												</li>
												<li>
													<a href="#sect-how-we-work">Workflow</a>
												</li>
												<li>
													<a href="#sect-contacts">Contacts</a>
												</li>
											</ul>
											<div className="btn-wrap-mobile">
												<div className="container">
													<a
														href="#sect-contacts"
														className="btn quick-lnk">
														<span>Contact us</span>
													</a>
												</div>
											</div>
										</div>
									</nav>

									<button className="toggle-btn">
										<span className="toggle-btn-inner">
											<span />
											<span className="toggle-btn-hover" />
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/* header END */}

				<div className="layout">
					<main className="page-wrap">
						<div className="top-screen">
							<div className="top-screen-inner">
								<div className="top-screen-txt-box">
									<div className="container">
										<div className="top-screen-txt">
											<div className="top-screen-txt-top">
												<div className="row">
													<div className="col-xl-9">
														<h1 className="h1-title">
															Advanced Digital Ecosystem Solutions:
															Scalable Tech & Smart Data Harmony
														</h1>
													</div>
												</div>
											</div>
											<div className="top-screen-txt-bottom">
												<div className="row">
													<div className="col-lg-8 col-xl-6">
														<div className="top-screen-txt-brief">
															<p>
																High-tech infrastructure with cloud
																systems: efficiency, security, and
																power for your network—automated and
																maintenance-free.
															</p>
														</div>
													</div>
													<div className="col-lg-4 col-xl-6">
														<div className="btn-wrap">
															<a
																href="#sect-contacts"
																className="btn quick-lnk">
																<span>Contact us</span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="top-screen-image">
									<img src="/img/inner/2.jpeg" alt="image" className="mobile" />
									<img src="/img/inner/1.jpeg" alt="image" className="desctop" />
								</div>
							</div>
						</div>

						<section id="sect-about" className="sect-about">
							<div className="container">
								<div className="sect-about-title">
									<div className="row">
										<div className="col-lg-3">
											<h2 className="h2-title">
												<strong>About</strong>
											</h2>
										</div>
										<div className="col-lg-9">
											<div className="title-descr-big">
												<p>
													DigitalNest — engineering resilient digital
													ecosystems powered by cloud computing, neural
													networks, and deep data analytics. Our mission
													is to fundamentally optimize business workflows,
													building high-performance environments through
													cutting-edge protocols and sophisticated system
													architecture.
												</p>
											</div>
											<div className="title-descr">
												<p>
													Leveraging nearly a decade of expertise in
													systems integration, we architect bespoke
													software products, scalable API frameworks, and
													secure automated databases. From startup
													platforms to enterprise portals and fintech
													solutions, we ensure a seamless synthesis of
													velocity, security, and stability.
												</p>
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
												<img src="/img/inner/4.png" alt="image" />
											</div>
										</div>
										<div className="col-6 col-md-3 align-self-end">
											<div className="about-image">
												<img src="/img/inner/5.png" alt="image" />
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* container END */}
						</section>

						<section id="sect-service" className="sect-service">
							<div className="container">
								<div className="title-sect">
									<div className="row">
										<div className="col-xl-6">
											<h2 className="h2-title">
												<strong>How</strong> we build
											</h2>
											<div className="title-descr">
												<p>
													Every solution we architect is more than just
													code – it’s a synergy of performance, security,
													and scalability, transforming your digital
													presence into a high-velocity, reliable
													ecosystem.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="service-lst-box">
									<div className="service-lst">
										<div className="row">
											<div className="col-12 service-itm service-itm-big">
												<div className="row align-items-center flex-lg-row-reverse">
													<div className="col-lg-6 service-image-cell">
														<div className="service-image">
															<img
																src="/img/inner/6.png"
																alt="Cloud Infrastructure"
															/>
														</div>
													</div>
													<div className="col-lg-6 service-txt-cell">
														<div className="service-itm-txt-inner">
															<div className="h3-title service-itm-number">
																01
															</div>
															<div className="h3-title service-itm-title">
																Cloud Infrastructure
															</div>
															<div className="service-itm-brief">
																<p>
																	Scalable server clusters,
																	automated CI/CD pipelines, and
																	robust microservices built on
																	AWS or Azure. Uninterrupted
																	uptime with 24/7 monitoring and
																	self-healing capabilities for
																	over 5 years.
																</p>
															</div>
															<div className="btn-wrap">
																<a
																	href="#sect-gallery"
																	className="btn quick-lnk">
																	<span>Explore stack</span>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6 service-itm">
												<div className="row">
													<div className="col-6 service-txt-cell">
														<div className="service-itm-txt-inner">
															<div className="h3-title service-itm-number">
																02
															</div>
															<div className="h3-title service-itm-title">
																Tech Audit & Optimization
															</div>
															<div className="service-itm-brief">
																<p>
																	Deep system analysis for
																	performance bottlenecks,
																	security vulnerability
																	assessments, and database query
																	refactoring with the latest
																	tools.
																</p>
															</div>
														</div>
													</div>
													<div className="col-6 service-image-cell">
														<div className="service-image">
															<img
																src="/img/inner/7.png"
																alt="Tech Audit"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6 service-itm">
												<div className="row">
													<div className="col-6 service-txt-cell">
														<div className="service-itm-txt-inner">
															<div className="h3-title service-itm-number">
																03
															</div>
															<div className="h3-title service-itm-title">
																Custom Web Engineering
															</div>
															<div className="service-itm-brief">
																<p>
																	Advanced frontend modules, API
																	integrations, unique backend
																	logic, and specialized software
																	components for enterprise.
																</p>
															</div>
														</div>
													</div>
													<div className="col-6 service-image-cell">
														<div className="service-image">
															<img
																src="/img/inner/8.png"
																alt="Engineering"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6 service-itm">
												<div className="row">
													<div className="col-6 service-txt-cell">
														<div className="service-itm-txt-inner">
															<div className="h3-title service-itm-number">
																04
															</div>
															<div className="h3-title service-itm-title">
																UI/UX Product Design
															</div>
															<div className="service-itm-brief">
																<p>
																	High-fidelity wireframes,
																	interactive prototypes, and user
																	journey mapping focused on
																	usability and modern tech
																	aesthetics.
																</p>
															</div>
														</div>
													</div>
													<div className="col-6 service-image-cell">
														<div className="service-image">
															<img
																src="/img/inner/9.png"
																alt="Product Design"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6 service-itm">
												<div className="row">
													<div className="col-6 service-txt-cell">
														<div className="service-itm-txt-inner">
															<div className="h3-title service-itm-number">
																05
															</div>
															<div className="h3-title service-itm-title">
																Exclusive Enterprise Support
															</div>
															<div className="service-itm-brief">
																<p>
																	Dedicated DevOps support and
																	priority incident management –
																	premium tier available for our
																	high-load corporate partners.
																</p>
															</div>
														</div>
													</div>
													<div className="col-6 service-image-cell">
														<div className="service-image">
															<img
																src="/img/inner/10.png"
																alt="Support"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="btn-more-wrap center">
										<a href="#sect-contacts" className="btn quick-lnk">
											<span>Get a quote</span>
										</a>
									</div>
								</div>
							</div>
						</section>

						<section id="sect-why-us" className="sect-why-us">
							<div className="container">
								<div className="title-sect center">
									<h2 className="h2-title">
										<strong>Why</strong> choose DigitalNest?
									</h2>
								</div>
								<div className="why-us-lst-box">
									<div className="why-us-lst row">
										<div className="why-us-itm col-6">
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
											<div className="why-us-itm-title h3-title">
												9+ years in system engineering
											</div>
											<div className="why-us-itm-brief">
												<p>
													Deploying robust infrastructures for clients
													across the EU, UK, and North America with global
													reach.
												</p>
											</div>
										</div>
										<div className="why-us-itm col-6">
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
											<div className="why-us-itm-title h3-title">
												Custom &amp; proprietary stack
											</div>
											<div className="why-us-itm-brief">
												<p>
													Tailored digital solutions built by senior
													developers, architects, and cybersecurity
													experts.
												</p>
											</div>
										</div>
										<div className="why-us-itm col-6">
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
											<div className="why-us-itm-title h3-title">
												Scalable for any workload
											</div>
											<div className="why-us-itm-brief">
												<p>
													Engineered to handle high-traffic platforms,
													SaaS tools, and complex enterprise-level
													databases.
												</p>
											</div>
										</div>
										<div className="why-us-itm col-6">
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
											<div className="why-us-itm-title h3-title">
												Data-driven architecture
											</div>
											<div className="why-us-itm-brief">
												<p>
													We optimize every node for efficiency, low
													latency, and maximum operational performance.
												</p>
											</div>
										</div>
										<div className="why-us-itm col-6">
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
											<div className="why-us-itm-title h3-title">
												Automated &amp; Zero-Ops
											</div>
											<div className="why-us-itm-brief">
												<p>
													Self-healing systems and AI-driven monitoring
													guarantee stability for years without manual
													intervention or server downtime.
												</p>
											</div>
										</div>
										<div className="why-us-itm col-6">
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
											<div className="why-us-itm-title h3-title">
												High security &amp; encryption
											</div>
											<div className="why-us-itm-brief">
												<p>
													Military-grade protocols and advanced encryption
													ensure your data environment remains safe,
													stable, and private.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section id="sect-gallery" className="sect-gallery">
							<div className="container">
								<div className="title-sect center">
									<h2 className="h2-title">
										<strong>Showcase</strong>
									</h2>
									<div className="title-descr">
										<p>
											Explore our recent digital deployments and architecture
											solutions.
										</p>
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
												<img
													src="/img/inner/13.png"
													alt="Cloud Dashboard"
												/>
											</a>
										</div>
										<div className="gallery-itm col-6">
											<a
												href="/img/inner/12.png"
												data-thumb="/img/inner/12.png"
												className="gallery-image fancy-photo"
												data-fancybox="fancy_gallery">
												<img
													src="/img/inner/12.png"
													alt="SaaS Application"
												/>
											</a>
										</div>
										<div className="gallery-itm col-12 col-sm-6">
											<a
												href="/img/inner/11.png"
												data-thumb="/img/inner/11.png"
												className="gallery-image fancy-photo"
												data-fancybox="fancy_gallery">
												<img
													src="/img/inner/11.png"
													alt="Enterprise Portal"
												/>
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
												<img
													src="/img/inner/15.png"
													alt="E-commerce Logic"
												/>
											</a>
										</div>
										{/* Скрытые элементы для демонстрации расширенной галереи */}
										<div className="gallery-itm col-6 hidden">
											<a
												href="/img/inner/13.png"
												data-thumb="/img/inner/13.png"
												className="gallery-image fancy-photo"
												data-fancybox="fancy_gallery">
												<img
													src="/img/inner/13.png"
													alt="Infrastructure Map"
												/>
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
												<img
													src="/img/inner/11.png"
													alt="Security Protocol"
												/>
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
												<img
													src="/img/inner/15.png"
													alt="DevOps Workflow"
												/>
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

						<section id="sect-how-we-work" className="sect-how-we-work">
							<div className="container">
								<div className="title-sect center">
									<h2 className="h2-title">
										<strong>Our</strong> workflow
									</h2>
									<div className="title-descr">
										<p>
											Build a resilient digital presence with DigitalNest’s
											custom engineering. <br />
											Accelerate your technological growth today!
										</p>
									</div>
								</div>
								<div className="how-we-work-box">
									<div className="row justify-content-between">
										<div className="how-we-work-image-cell col-lg-6">
											<div className="how-we-work-image">
												<img
													src="/img/inner/17.png"
													alt="Development Workflow"
												/>
											</div>
										</div>
										<div className="how-we-work-txt-cell col-lg-5 col-xl-4">
											<ul className="how-we-work-lst">
												<li className="how-we-work-itm">
													<div className="h3-title how-we-work-itm-number">
														01
													</div>
													<div className="h3-title how-we-work-itm-title">
														Discovery &amp; Analysis
													</div>
													<div className="how-we-work-itm-brief">
														<p>
															Reach out to us – we’ll audit your
															current stack and define project goals.
														</p>
													</div>
												</li>
												<li className="how-we-work-itm">
													<div className="h3-title how-we-work-itm-number">
														02
													</div>
													<div className="h3-title how-we-work-itm-title">
														Architecture Blueprint
													</div>
													<div className="how-we-work-itm-brief">
														<p>
															We design a scalable system map, data
															schemas, and secure API structures.
														</p>
													</div>
												</li>
												<li className="how-we-work-itm">
													<div className="h3-title how-we-work-itm-number">
														03
													</div>
													<div className="h3-title how-we-work-itm-title">
														Agile Development
													</div>
													<div className="how-we-work-itm-brief">
														<p>
															Our team builds your product using
															modern frameworks with continuous
															integration and code reviews.
														</p>
													</div>
												</li>
												<li className="how-we-work-itm">
													<div className="h3-title how-we-work-itm-number">
														04
													</div>
													<div className="h3-title how-we-work-itm-title">
														Deployment &amp; Support
													</div>
													<div className="how-we-work-itm-brief">
														<p>
															We launch your ecosystem with full
															automation, providing long-term
															monitoring and maintenance.
														</p>
													</div>
												</li>
											</ul>
											{/* how-we-work-lst */}
										</div>
									</div>
								</div>
								<div className="btn-more-wrap center">
									<div className="button-description">
										<p>
											Ready to scale? Connect with us – we’ll dive into
											technical <br />
											details and help you architect the perfect system!
										</p>
									</div>
									<a href="#sect-contacts" className="btn quick-lnk">
										<span>Start a project</span>
									</a>
								</div>
							</div>
							{/* container END */}
						</section>

						<section className="sect-reviews">
							<div className="title-sect center">
								<h2 className="h2-title">
									<strong>Reviews</strong>
								</h2>
								<div className="title-descr">
									<p>
										Every system built by DigitalNest is engineered for
										stability and exceptional performance.
									</p>
								</div>
							</div>
							<div className="reviews-slider-box">
								<div className="reviews-slider">
									<div className="review-slide-itm">
										<div className="review-slide-inner">
											<div className="review-slide-top-line">
												<div className="review-slide-top-photo">
													<img src="/img/inner/18.png" alt="Alex R." />
												</div>
												<div className="review-slide-top-txt">
													<div className="review-slide-author">
														Alex R. (CTO)
													</div>
													<div className="review-slide-date">
														12 February 2026
													</div>
												</div>
											</div>
											<div className="review-slide-txt">
												<p>
													DigitalNest completely refactored our legacy
													infrastructure. The transition to a
													microservices architecture was seamless,
													resulting in a 40% increase in deployment speed.
													Their team demonstrated deep expertise in
													Node.js and cloud security protocols throughout
													the project.
												</p>
											</div>
										</div>
									</div>
									{/* review-slide-itm */}
									<div className="review-slide-itm">
										<div className="review-slide-inner">
											<div className="review-slide-top-line">
												<div className="review-slide-top-photo">
													<img src="/img/inner/18.png" alt="Sarah J." />
												</div>
												<div className="review-slide-top-txt">
													<div className="review-slide-author">
														Sarah J. (Product Owner)
													</div>
													<div className="review-slide-date">
														28 January 2026
													</div>
												</div>
											</div>
											<div className="review-slide-txt">
												<p>
													The UI/UX transformation they provided for our
													SaaS platform was incredible. DigitalNest
													doesn't just write code; they build intuitive
													user experiences. Their clean, modular frontend
													components made it easy for our internal team to
													scale the product further.
												</p>
											</div>
										</div>
									</div>
									{/* review-slide-itm */}
									<div className="review-slide-itm">
										<div className="review-slide-inner">
											<div className="review-slide-top-line">
												<div className="review-slide-top-photo">
													<img src="/img/inner/18.png" alt="Michael V." />
												</div>
												<div className="review-slide-top-txt">
													<div className="review-slide-author">
														Michael V. (Founder)
													</div>
													<div className="review-slide-date">
														15 January 2026
													</div>
												</div>
											</div>
											<div className="review-slide-txt">
												<p>
													Finding a partner that understands both business
													logic and high-end engineering is rare.
													DigitalNest delivered our MVP on time and
													exceeded our expectations regarding system
													uptime and API responsiveness. A truly reliable
													partner for any tech-driven venture.
												</p>
											</div>
										</div>
									</div>
									{/* review-slide-itm */}
								</div>
								{/* reviews-slider */}
								<div className="slide-controls">
									<div className="container">
										<div className="slide-controls-inner">
											<div className="dots-nav" />
											<div className="slider-nav" />
										</div>
									</div>
								</div>
							</div>
							{/* reviews-slider-box */}
						</section>

						<section id="sect-contacts" className="sect-contacts">
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="title-sect">
											<h2 className="h2-title">
												<strong>Contacts</strong>
											</h2>
											<div className="title-descr">
												<p>
													Let’s build your next digital breakthrough
													together! We provide remote engineering and
													on-site consulting across the EU, UK, and North
													America.
												</p>
												<p>
													*Global availability – our distributed team
													operates across multiple time zones to support
													you.
												</p>
											</div>
										</div>
										<div className="contacts-lst">
											<ul>
												<li>Telegram / WhatsApp:</li>
												<li>
													<div className="h3-title">
														<a href="tel:+12345678">+12345678</a>
													</div>
												</li>
											</ul>
											<ul>
												<li>E-mail:</li>
												<li>
													<div className="h3-title">
														<a href="mailto:dev@DigitalNest.tech">
															dev@DigitalNest.tech
														</a>
													</div>
												</li>
											</ul>
										</div>
										<div className="soc-wrap">
											<div className="soc-lst">
												<a
													href="#"
													className="soc-btn"
													title="#"
													style={{
														backgroundImage:
															'url(/img/_style/_svg/_social/wts.svg)',
													}}
												/>
												<a
													href="#"
													className="soc-btn"
													title="#"
													style={{
														backgroundImage:
															'url(/img/_style/_svg/_social/inst.svg)',
													}}
												/>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<form action="#" className="contact-form">
											<div className="form-title h3-title">
												Start a conversation about your project and get a
												free technical infrastructure audit.
											</div>
											<div className="fields-box">
												<div className="field-itm">
													<div className="cust-sel">
														<span className="wpcf7-form-control-wrap dropdown">
															<select
																name="dropdown"
																className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
																aria-required="true"
																aria-invalid="false">
																<option value="">
																	Select Project Type
																</option>
																<option value="web">
																	Web Engineering
																</option>
																<option value="cloud">
																	Cloud Infrastructure
																</option>
																<option value="audit">
																	Technical Audit
																</option>
															</select>
														</span>
													</div>
												</div>
												<div className="field-itm">
													<div className="cust-inp">
														<span className="wpcf7-form-control-wrap address">
															<input
																type="text"
																name="address"
																defaultValue=""
																size={40}
																className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
																aria-required="true"
																aria-invalid="false"
																placeholder="Full Name"
															/>
														</span>
													</div>
												</div>
												<div className="field-itm">
													<div className="cust-inp">
														<span className="wpcf7-form-control-wrap address">
															<input
																type="text"
																name="address"
																defaultValue=""
																size={40}
																className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
																aria-required="true"
																aria-invalid="false"
																placeholder="Company Phone"
															/>
														</span>
													</div>
												</div>
												<div className="field-itm">
													<div className="cust-inp">
														<span className="wpcf7-form-control-wrap address">
															<input
																type="text"
																name="address"
																defaultValue=""
																size={40}
																className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
																aria-required="true"
																aria-invalid="false"
																placeholder="Business E-Mail"
															/>
														</span>
													</div>
												</div>
												<div className="field-itm">
													<div className="cust-textarea">
														<span className="wpcf7-form-control-wrap textarea">
															<textarea
																name="textarea"
																cols={40}
																rows={4}
																className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
																aria-required="true"
																aria-invalid="false"
																placeholder="Briefly describe your project or tech stack"
																defaultValue={''}
															/>
														</span>
													</div>
												</div>
												<div className="field-itm">
													<div className="check-lst">
														<span className="wpcf7-form-control-wrap checkbox">
															<span className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required">
																<span className="wpcf7-list-item first">
																	<label>
																		<input
																			type="checkbox"
																			name="checkbox[]"
																			defaultValue={1}
																		/>

																		<span className="wpcf7-list-item-label">
																			Checkbox 1
																		</span>
																	</label>
																</span>

																<span className="wpcf7-list-item">
																	<label>
																		<input
																			type="checkbox"
																			name="checkbox[]"
																			defaultValue={2}
																		/>

																		<span className="wpcf7-list-item-label">
																			Checkbox 2
																		</span>
																	</label>
																</span>
															</span>
														</span>
													</div>
												</div>
												<div className="btn-form-wrap">
													<span className="btn-form">
														<input
															type="submit"
															defaultValue="Submit Request"
															className="wpcf7-form-control wpcf7-submit"
														/>
														<span className="ajax-loader" />
														<span>Send</span>
													</span>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</section>
					</main>
					{/* page-wrap END */}
				</div>
				{/* layout */}
				<footer className="foot-general">
					<div className="btn-top" />
					<div className="container">
						<div className="foot-bottom">
							<div className="row">
								<div className="col-12 center">
									<div className="copyright">
										Copyright © DigitalNest 2022, <br />
										All rights reserved.
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
				{/* footer END */}
				<div className="modal-set">
					{/* Button trigger modal */}
					{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button> */}
					{/* Modal */}
					<div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
						{/* Vertically centered scrollable modal */}
						{/* class="modal-dialog modal-dialog-centered modal-dialog-scrollable" */}
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									{/* <h5 class="modal-title">Modal title</h5> */}
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									/>
								</div>
								<div className="modal-body">
									<div className="modal-title">
										<h3>Modal_Title</h3>
										<div className="title-descr">Modal_Title_Descr</div>
									</div>
									<div className="modal-txt">
										<div className="cust-inp">
											<input type="text" placeholder="placeholder" />
										</div>
										<br />
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing
											elit. Inventore vel fuga neque qui, architecto rem
											tempora laborum, corporis dolor modi veniam aliquam,
											esse ea praesentium voluptas fugit veritatis, nobis
											quae.
										</p>
									</div>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-secondary"
										data-bs-dismiss="modal">
										Close
									</button>
									<button type="button" className="btn btn-primary">
										Save changes
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* Modal END */}
				</div>
				{/* modal-set END */}
			</>
		</>
	);
}

export default App;
