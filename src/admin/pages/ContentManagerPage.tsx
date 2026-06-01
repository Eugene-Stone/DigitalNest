import { ChangeEvent, useEffect, useState } from 'react';
import { apiRequest, API_BASE_URL } from '../../api/client';
import { EditableSection } from '../types/admin';

const editableSections = ['hero', 'about', 'services', 'features', 'projects', 'workflow', 'reviews', 'contacts', 'privacy'];

function isLangObject(value: unknown): value is { en?: string; ru?: string } {
	return Boolean(value && typeof value === 'object' && ('en' in value || 'ru' in value));
}

export default function ContentManagerPage() {
	const [sectionId, setSectionId] = useState('hero');
	const [section, setSection] = useState<EditableSection | null>(null);
	const [rawJson, setRawJson] = useState('');
	const [message, setMessage] = useState('');

	async function loadSection(id = sectionId) {
		const nextSection = await apiRequest<EditableSection>(`/api/sections/${id}`);
		setSection(nextSection);
		setRawJson(JSON.stringify(nextSection, null, 2));
	}

	async function saveSection() {
		const parsed = JSON.parse(rawJson);
		const saved = await apiRequest<EditableSection>(`/api/sections/${sectionId}`, {
			method: 'PUT',
			body: JSON.stringify(parsed),
		});
		setSection(saved);
		setRawJson(JSON.stringify(saved, null, 2));
		setMessage('Saved');
	}

	async function uploadImage(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);
		const data = await apiRequest<{ path: string }>('/api/upload', {
			method: 'POST',
			body: formData,
		});
		setMessage(`Uploaded: ${API_BASE_URL}${data.path}`);
	}

	useEffect(() => {
		loadSection(sectionId);
	}, [sectionId]);

	return (
		<section className="admin-page">
			<div className="admin-page-head">
				<h1>Content Manager</h1>
				<select value={sectionId} onChange={(event) => setSectionId(event.target.value)}>
					{editableSections.map((id) => (
						<option key={id} value={id}>
							{id}
						</option>
					))}
				</select>
			</div>
			<div className="admin-two-col">
				<div className="admin-panel">
					<h2>Structured fields</h2>
					{section &&
						Object.entries(section).map(([key, value]) => {
							if (!isLangObject(value)) return null;
							return (
								<div className="admin-lang-field" key={key}>
									<span>{key}</span>
									<label>
										EN
										<textarea readOnly value={value.en ?? ''} />
									</label>
									<label>
										RU
										<textarea readOnly value={value.ru ?? ''} />
									</label>
								</div>
							);
						})}
					<label className="admin-upload">
						Upload image
						<input type="file" accept="image/*" onChange={uploadImage} />
					</label>
				</div>
				<div className="admin-panel">
					<h2>Section JSON</h2>
					<textarea
						className="admin-json"
						value={rawJson}
						onChange={(event) => setRawJson(event.target.value)}
					/>
					<div className="admin-actions">
						<button onClick={saveSection}>Save section</button>
						{message && <span>{message}</span>}
					</div>
				</div>
			</div>
		</section>
	);
}
