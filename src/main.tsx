import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.sass';
import './admin/styles/admin.sass';
import App from './App';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
