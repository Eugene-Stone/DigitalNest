import { useEffect, useState } from 'react';
import { apiRequest } from '../../api/client';
import { LeadRequest, RequestsResponse } from '../types/admin';

export default function RequestsPage() {
	const [data, setData] = useState<RequestsResponse | null>(null);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);

	async function loadRequests() {
		const params = new URLSearchParams({ page: String(page), limit: '8', search });
		setData(await apiRequest<RequestsResponse>(`/api/requests?${params}`));
	}

	async function updateStatus(lead: LeadRequest) {
		await apiRequest(`/api/requests/${lead._id}/status`, {
			method: 'PATCH',
			body: JSON.stringify({ status: lead.status === 'processed' ? 'new' : 'processed' }),
		});
		loadRequests();
	}

	async function deleteLead(id: string) {
		await apiRequest(`/api/requests/${id}`, { method: 'DELETE' });
		loadRequests();
	}

	useEffect(() => {
		loadRequests();
	}, [page]);

	return (
		<section className="admin-page">
			<div className="admin-page-head">
				<h1>Requests</h1>
				<form
					className="admin-search"
					onSubmit={(event) => {
						event.preventDefault();
						setPage(1);
						loadRequests();
					}}>
					<input
						value={search}
						onChange={(event) => setSearch(event.target.value)}
						placeholder="Search leads"
					/>
					<button>Search</button>
				</form>
			</div>
			<div className="admin-panel admin-table-wrap">
				<table className="admin-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Type</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{data?.items.map((lead) => (
							<tr key={lead._id}>
								<td>
									<strong>{lead.fullName}</strong>
									<span>{new Date(lead.createdAt).toLocaleString()}</span>
								</td>
								<td>{lead.email}</td>
								<td>{lead.companyPhone}</td>
								<td>{lead.selectField || 'unknown'}</td>
								<td>
									<button className="admin-status" onClick={() => updateStatus(lead)}>
										{lead.status}
									</button>
								</td>
								<td>
									<button className="admin-danger" onClick={() => deleteLead(lead._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{data?.items.length === 0 && <div className="admin-empty">No requests found</div>}
			</div>
			<div className="admin-pagination">
				<button disabled={page <= 1} onClick={() => setPage(page - 1)}>
					Prev
				</button>
				<span>
					Page {data?.page ?? page} / {data?.pages || 1}
				</span>
				<button disabled={page >= (data?.pages || 1)} onClick={() => setPage(page + 1)}>
					Next
				</button>
			</div>
		</section>
	);
}
