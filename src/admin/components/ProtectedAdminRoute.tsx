import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken, refreshAccessToken } from '../../api/client';

export default function ProtectedAdminRoute() {
	const [ready, setReady] = useState(false);
	const [allowed, setAllowed] = useState(Boolean(getAccessToken()));

	useEffect(() => {
		if (getAccessToken()) {
			setReady(true);
			return;
		}

		refreshAccessToken().then((success) => {
			setAllowed(success);
			setReady(true);
		});
	}, []);

	if (!ready) return <div className="admin-loading">Loading...</div>;
	if (!allowed) return <Navigate to="/admin/login" replace />;

	return <Outlet />;
}
