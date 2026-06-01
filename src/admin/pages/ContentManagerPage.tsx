import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { apiRequest, API_BASE_URL } from '../../api/client';
import { EditableSection } from '../types/admin';

const editableSections = ['hero', 'about', 'services', 'features', 'projects', 'workflow', 'reviews', 'contacts', 'privacy'];
type PathSegment = string | number;
type ImageCandidate = {
	id: string;
	label: string;
	path: PathSegment[];
	value: string;
};

function isLangObject(value: unknown): value is { en?: string; ru?: string } {
	return Boolean(value && typeof value === 'object' && ('en' in value || 'ru' in value));
}

function isLangObjectArray(value: unknown): value is { en?: string; ru?: string }[] {
	return Array.isArray(value) && value.every(isLangObject);
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

function isImageField(key: string, value: string) {
	const normalizedKey = key.toLowerCase();
	return (
		normalizedKey.includes('image') ||
		normalizedKey.includes('avatar') ||
		normalizedKey.includes('icon') ||
		normalizedKey === 'src' ||
		value.startsWith('/img/') ||
		value.startsWith('/uploads/') ||
		value.startsWith('http')
	);
}

function formatPath(path: PathSegment[]) {
	return path
		.map((item) => (typeof item === 'number' ? `[${item}]` : item))
		.join('.')
		.replace('.[', '[');
}

function collectImageCandidates(value: unknown, path: PathSegment[] = []): ImageCandidate[] {
	if (typeof value === 'string') {
		const key = String(path[path.length - 1] ?? '');
		return isImageField(key, value)
			? [{ id: formatPath(path), label: formatPath(path), path, value }]
			: [];
	}

	if (Array.isArray(value)) {
		return value.flatMap((item, index) => collectImageCandidates(item, [...path, index]));
	}

	if (isRecord(value)) {
		return Object.entries(value).flatMap(([key, item]) => collectImageCandidates(item, [...path, key]));
	}

	return [];
}

function setValueAtPath(value: unknown, path: PathSegment[], nextValue: string): unknown {
	if (path.length === 0) return nextValue;

	const [head, ...tail] = path;

	if (Array.isArray(value)) {
		const clone = [...value];
		if (typeof head === 'number') {
			clone[head] = setValueAtPath(clone[head], tail, nextValue);
		}
		return clone;
	}

	if (isRecord(value) && typeof head === 'string') {
		return {
			...value,
			[head]: setValueAtPath(value[head], tail, nextValue),
		};
	}

	return value;
}

export default function ContentManagerPage() {
	const [sectionId, setSectionId] = useState('hero');
	const [section, setSection] = useState<EditableSection | null>(null);
	const [rawJson, setRawJson] = useState('');
	const [message, setMessage] = useState('');
	const [imageTargetId, setImageTargetId] = useState('');
	const imageCandidates = useMemo(() => (section ? collectImageCandidates(section) : []), [section]);

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

	function updateSection(nextSection: EditableSection) {
		setSection(nextSection);
		setRawJson(JSON.stringify(nextSection, null, 2));
		setMessage('');
	}

	function updateLangField(key: string, lang: 'en' | 'ru', value: string) {
		if (!section || !isLangObject(section[key])) return;

		updateSection({
			...section,
			[key]: {
				...section[key],
				[lang]: value,
			},
		});
	}

	function updateLangArrayField(key: string, index: number, lang: 'en' | 'ru', value: string) {
		if (!section || !isLangObjectArray(section[key])) return;

		const nextItems = [...section[key]];
		nextItems[index] = { ...nextItems[index], [lang]: value };
		updateSection({ ...section, [key]: nextItems });
	}

	function updateStringField(key: string, value: string) {
		if (!section) return;
		updateSection({ ...section, [key]: value });
	}

	async function uploadImage(event: ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		const target = imageCandidates.find((candidate) => candidate.id === imageTargetId);
		if (!file || !section || !target) return;

		const formData = new FormData();
		formData.append('file', file);
		const data = await apiRequest<{ path: string; url: string }>('/api/upload', {
			method: 'POST',
			body: formData,
		});

		updateSection(setValueAtPath(section, target.path, data.url) as EditableSection);
		setMessage(`Uploaded and applied to ${target.label}: ${data.url || `${API_BASE_URL}${data.path}`}`);
	}

	useEffect(() => {
		loadSection(sectionId);
	}, [sectionId]);

	useEffect(() => {
		if (!imageCandidates.some((candidate) => candidate.id === imageTargetId)) {
			setImageTargetId(imageCandidates[0]?.id ?? '');
		}
	}, [imageCandidates, imageTargetId]);

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
							if (isLangObject(value)) {
								return (
									<div className="admin-lang-field" key={key}>
										<span>{key}</span>
										<label>
											EN
											<textarea
												value={value.en ?? ''}
												onChange={(event) => updateLangField(key, 'en', event.target.value)}
											/>
										</label>
										<label>
											RU
											<textarea
												value={value.ru ?? ''}
												onChange={(event) => updateLangField(key, 'ru', event.target.value)}
											/>
										</label>
									</div>
								);
							}

							if (isLangObjectArray(value)) {
								return (
									<div className="admin-lang-field" key={key}>
										<span>{key}</span>
										{value.map((item, index) => (
											<div className="admin-repeat-field" key={`${key}-${index}`}>
												<label>
													EN #{index + 1}
													<textarea
														value={item.en ?? ''}
														onChange={(event) =>
															updateLangArrayField(key, index, 'en', event.target.value)
														}
													/>
												</label>
												<label>
													RU #{index + 1}
													<textarea
														value={item.ru ?? ''}
														onChange={(event) =>
															updateLangArrayField(key, index, 'ru', event.target.value)
														}
													/>
												</label>
											</div>
										))}
									</div>
								);
							}

							if (
								typeof value === 'string' &&
								(key.toLowerCase().includes('image') || key === 'id' || key === 'email')
							) {
								return (
									<label className="admin-simple-field" key={key}>
										{key}
										<input value={value} onChange={(event) => updateStringField(key, event.target.value)} />
									</label>
								);
							}

							return (
								null
							);
						})}
					<label className="admin-upload">
						Upload image
						<select
							value={imageTargetId}
							onChange={(event) => setImageTargetId(event.target.value)}
							disabled={imageCandidates.length === 0}>
							{imageCandidates.length === 0 && <option>No image fields</option>}
							{imageCandidates.map((candidate) => (
								<option key={candidate.id} value={candidate.id}>
									{candidate.label}
								</option>
							))}
						</select>
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
