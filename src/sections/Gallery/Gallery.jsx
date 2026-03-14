import { useState, useEffect, useEffectEvent } from 'react';
import { request } from '../../api/request.js';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';

export default function Gallery() {
	const { section, loading, errorData } = useSectionData('/projects');
	const [categoryList, setCategoryList] = useState([]);
	const [imagesLimit, setImagesLimit] = useState(5);

	const updateCategoryList = useEffectEvent(() => {
		setCategoryList(section.content);
	});

	useEffect(() => {
		if (!section) return;

		updateCategoryList();
	}, [section]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (errorData) {
		return <div>Error fetch data</div>;
	}

	const { id, title, description, content } = section || {};
	const galleryList = categoryList.find((categoryItem) => categoryItem.isActive);
	// if (!galleryList) return null;
	if (!galleryList) {
		return <div>No active category</div>;
	}

	console.log(galleryList);

	async function toggleActiveCategory(categoryItem) {
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
		} catch (err) {
			console.error(err);
		}
	}

	function showAllImages() {
		setImagesLimit(galleryList?.images.length);
		console.log(galleryList?.images.length);
	}

	return (
		<section id={id} className="sect-gallery">
			<div className="container">
				<div className="title-sect center">
					<TitleHtml className="h2-title">{title}</TitleHtml>
					<div className="title-descr">
						<p>{description}</p>
					</div>
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
										<span>{categoryItem.category}</span>
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
									<a
										href={image}
										data-thumb={image}
										className="gallery-image fancy-photo"
										data-fancybox="fancy_gallery">
										<img src={image} alt="Image" />
									</a>
								</div>
							);
						})}
					</div>
					{imagesLimit < galleryList?.images.length ? (
						<div className="btn-more-wrap center">
							<span className="btn-link" onClick={showAllImages}>
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
