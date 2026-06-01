import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest, setAccessToken } from '../../api/client';

export default function LoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('admin@digitalnest.local');
	const [password, setPassword] = useState('admin12345');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setLoading(true);
		setError('');

		try {
			const data = await apiRequest<{ accessToken: string }>('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
			});
			setAccessToken(data.accessToken);
			navigate('/admin');
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Login failed');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="admin-login">
			<form onSubmit={handleSubmit}>
				<h1>Admin Login</h1>
				<label>
					Email
					<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
				</label>
				<label>
					Password
					<input
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type="password"
					/>
				</label>
				{error && <p className="admin-error">{error}</p>}
				<button disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
			</form>
		</div>
	);
}
