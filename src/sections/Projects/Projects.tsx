import { useState, useEffect, useEffectEvent } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

import { request } from '../../api/request';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang';
import { ProjectContent } from '../../types';

export default function Projects() {
	const { section, loading, errorData } = useSectionData('/projects');
	const [categoryList, setCategoryList] = useState<ProjectContent[]>([]);
	const [imagesLimit, setImagesLimit] = useState(5);
	const [index, setIndex] = useState(-1);
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	const updateCategoryList = useEffectEvent(() => {
		if (!section) return;
		setCategoryList((section.content as ProjectContent[]) || []);
	});

	useEffect(() => {
		updateCategoryList();
	}, [section]);

	if (loading) {
		return <div>Loading Gallery...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, description, content } = section || {};
	const galleryList = categoryList.find((categoryItem) => categoryItem.isActive);

	if (!galleryList) {
		return <div>No active category</div>;
	}

	// console.log(galleryList);

	async function toggleActiveCategory(categoryItem: ProjectContent) {
		console.log(categoryItem);

		const endpoint = '/projects';
		if (categoryItem.isActive) return;

		const newContent = categoryList.map((item, i) => ({
			...item,
			isActive: item.id === categoryItem.id,
		}));

		try {
			await request(`${endpoint}`, {
				method: 'PATCH',
				body: JSON.stringify({
					content: newContent,
				}),

				// Если использовать PUT, Нужно отправлять весь объект целиком.
				// method: 'PUT',
				// body: JSON.stringify({
				// 	id: section.id,
				// 	title: section.title,
				// 	description: section.description,
				// 	content: newContent
				// })
			});

			setCategoryList(newContent);
			setImagesLimit(5);
		} catch (err) {
			console.error(err);
		}
	}

	function showAllImages() {
		galleryList && setImagesLimit(galleryList.images.length);
	}

	const slides =
		galleryList?.images.slice(0, imagesLimit).map((img, i) => {
			return { src: img };
		}) || [];

	return (
		<section id={id} className="sect-gallery">
			<div className="container">
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
				<div className="gallery-box">
					<div className="gallery-filters">
						<ul className="gallery-filters-lst">
							{categoryList.map((categoryItem, i) => {
								return (
									<li
										key={categoryItem.id}
										className={`${categoryItem.isActive ? 'active' : ''}`}
										onClick={() => toggleActiveCategory(categoryItem)}>
										<span>{getLang(categoryItem.category, currentLang)}</span>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="gallery row">
						{galleryList?.images.map((image, i) => {
							if (i > imagesLimit - 1) return null;

							let classNameItem =
								i === 2
									? 'gallery-itm col-12 col-sm-6'
									: i === 3 || i === 4 || i > 4
										? 'gallery-itm col-6 col-sm-3'
										: 'gallery-itm col-6';

							return (
								<div key={i} className={classNameItem}>
									<span className="gallery-image">
										<img
											src={`${import.meta.env.BASE_URL}/${image}`}
											alt="Image"
											className="gallery-image"
											onClick={() => setIndex(i)}
										/>
									</span>
								</div>
							);
						})}
					</div>

					<Lightbox
						index={index}
						slides={slides}
						open={index >= 0}
						close={() => setIndex(-1)}
						plugins={[Counter]}
					/>

					{imagesLimit < galleryList?.images.length ? (
						<div className="btn-more-wrap center">
							<span className="btn-link" onClick={showAllImages}>
								<span>
									{currentLang === 'ru' ? 'Все проекты' : 'View all projects'}
								</span>
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
							</span>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</section>
	);
}
