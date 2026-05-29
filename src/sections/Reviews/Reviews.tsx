import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Reviews() {
	const { section, loading, errorData } = useSectionData('/reviews');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	if (loading) {
		return <div>Loading Services...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, description, content } = section || {};

	return (
		<section className="sect-reviews">
			<div className="title-sect center">
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

			<div className="reviews-slider-box slider--swiper">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					scrollbar={{ draggable: true }}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					pagination={{
						el: '.swiper-pagination',
						clickable: true,
					}}
					mousewheel={{
						enabled: true,
						forceToAxis: true,
						sensitivity: 1,
					}}>
					{content?.map((review, i) => {
						switch (review.type) {
							case 'reviews':
								return (
									<SwiperSlide>
										<div className="review-slide-itm">
											<div className="review-slide-inner">
												<div className="review-slide-top-line">
													<div className="review-slide-top-photo">
														<img
															src="/img/inner/18.png"
															alt="Alex R."
														/>
													</div>
													<div className="review-slide-top-txt">
														<div className="review-slide-author">
															{review.name} <br />
															{getLang(review.position, currentLang)}
														</div>
														<div className="review-slide-date">
															{getLang(review.date, currentLang)}
														</div>
													</div>
												</div>
												<div className="review-slide-txt">
													{review.textReview.map((p, i) => {
														return (
															<p key={i}>{getLang(p, currentLang)}</p>
														);
													})}
												</div>
											</div>
										</div>
									</SwiperSlide>
								);

							default:
								return null;
						}
					})}
				</Swiper>

				<div className="slide-controls">
					<div className="slider-pagination">
						<div className="swiper-pagination"></div>
					</div>
					<div className="slider-navigation">
						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
