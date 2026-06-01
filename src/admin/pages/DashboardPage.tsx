import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { apiRequest } from '../../api/client';
import StatChart from '../components/StatChart';
import { LeadRequest, RequestStats } from '../types/admin';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ?? 'http://localhost:4000';

export default function DashboardPage() {
	const [stats, setStats] = useState<RequestStats | null>(null);
	const [latestLead, setLatestLead] = useState<LeadRequest | null>(null);

	async function loadStats() {
		setStats(await apiRequest<RequestStats>('/api/admin/stats'));
	}

	useEffect(() => {
		loadStats();
		const socket = io(SOCKET_URL, { withCredentials: true });
		socket.emit('admin:join');
		socket.on('lead:created', (lead: LeadRequest) => {
			setLatestLead(lead);
			loadStats();
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<section className="admin-page">
			<div className="admin-page-head">
				<h1>Dashboard</h1>
				{latestLead && <span className="admin-live">New lead: {latestLead.fullName}</span>}
			</div>
			<div className="admin-stat-grid">
				<div className="admin-panel">
					<span>Total requests</span>
					<strong>{stats?.totalRequests ?? 0}</strong>
				</div>
				<div className="admin-panel">
					<span>Last 7 activity days</span>
					<strong>{stats?.byDay.length ?? 0}</strong>
				</div>
			</div>
			<div className="admin-two-col">
				<div className="admin-panel">
					<h2>Requests by project type</h2>
					<StatChart
						items={(stats?.bySelectField ?? []).map((item) => ({
							label: item.selectField,
							count: item.count,
						}))}
					/>
				</div>
				<div className="admin-panel">
					<h2>Requests per day</h2>
					<StatChart
						items={(stats?.byDay ?? []).map((item) => ({ label: item.date, count: item.count }))}
					/>
				</div>
			</div>
		</section>
	);
}
