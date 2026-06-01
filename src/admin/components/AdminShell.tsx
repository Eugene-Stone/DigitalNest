import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { apiRequest, setAccessToken } from '../../api/client';

export default function AdminShell() {
	const navigate = useNavigate();

	async function logout() {
		await apiRequest('/api/auth/logout', { method: 'POST' }).catch(() => undefined);
		setAccessToken(null);
		navigate('/admin/login');
	}

	return (
		<div className="admin-shell">
			<aside className="admin-sidebar">
				<div className="admin-brand">DigitalNest Admin</div>
				<nav>
					<NavLink to="/admin" end>
						Overview
					</NavLink>
					<NavLink to="/admin/content">Content</NavLink>
					<NavLink to="/admin/requests">Requests</NavLink>
				</nav>
				<button className="admin-ghost-btn" onClick={logout}>
					Logout
				</button>
			</aside>
			<main className="admin-main">
				<Outlet />
			</main>
		</div>
	);
}
