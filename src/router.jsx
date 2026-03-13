import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import PageNotFound from './pages/PageNotFound';
import Privacy from './pages/Privacy';
import Home from './pages/Home/Home';

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
]);
