import Form from '../../components/Form/Form';
import { useSectionData } from '../../hooks/useSectionData';
import TitleHtml from '../../utils/TitleHtml';
import useLanguageContext from '../../context/useLanguageContext';
import getLang from '../../utils/getLang';

export default function Contacts() {
	const { section, loading, errorData } = useSectionData('/contacts');
	const { currentLang } = useLanguageContext();
	// {getLang(text, currentLang)}

	if (loading) {
		return <div>Loading Services...</div>;
	}
	if (errorData) {
		return <div>Error fetch data</div>;
	}
	if (!section) return null;

	const { id, title, description, phone, email, social } = section || {};

	return (
		<section id="contacts" className="sect-contacts">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="title-sect">
							<TitleHtml titleClass="h2-title">
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
						<div className="contacts-lst">
							{phone && (
								<ul>
									<li>Telegram / WhatsApp:</li>
									<li>
										<div className="h3-title">
											<a href={`tel:${phone}`}>{phone}</a>
										</div>
									</li>
								</ul>
							)}

							{email && (
								<ul>
									<li>E-mail:</li>
									<li>
										<div className="h3-title">
											<a href={`mailto:${email}`}>{email}</a>
										</div>
									</li>
								</ul>
							)}
						</div>

						{social && (
							<div className="soc-wrap">
								<div className="soc-lst">
									{social.map((socialItem, index) => (
										<a
											key={socialItem.type}
											href={socialItem.link}
											className="soc-btn"
											title={socialItem.type}
											target="_blank"
											rel="noreferrer"
											style={{
												backgroundImage: `url(${socialItem.icon})`,
											}}
										/>
									))}
								</div>
							</div>
						)}
					</div>
					<div className="col-lg-6">
						<Form sectionInfo={section} />
					</div>
				</div>
			</div>
		</section>
	);
}
