import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import Privacy from './pages/Privacy';
import Home from './pages/Home';
import AdminShell from './admin/components/AdminShell';
import ProtectedAdminRoute from './admin/components/ProtectedAdminRoute';
import ContentManagerPage from './admin/pages/ContentManagerPage';
import DashboardPage from './admin/pages/DashboardPage';
import LoginPage from './admin/pages/LoginPage';
import RequestsPage from './admin/pages/RequestsPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '*', element: <PageNotFound /> },
			{ index: true, element: <Home /> },
			{ path: '/privacy', element: <Privacy /> },
			// { path: '/pages/page/:id', element: <Page /> },
		],
	},
	{ path: '/admin/login', element: <LoginPage /> },
	{
		path: '/admin',
		element: <ProtectedAdminRoute />,
		children: [
			{
				element: <AdminShell />,
				children: [
					{ index: true, element: <DashboardPage /> },
					{ path: 'content', element: <ContentManagerPage /> },
					{ path: 'requests', element: <RequestsPage /> },
				],
			},
		],
	},
]);
