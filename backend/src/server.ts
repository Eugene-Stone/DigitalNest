import { createServer } from 'node:http';
import { createApp } from './app.js';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';
import { initSocket } from './socket.js';

async function bootstrap() {
	await connectDb();

	const app = createApp();
	const server = createServer(app);
	initSocket(server);

	server.listen(env.port, () => {
		console.log(`API ready: http://localhost:${env.port}`);
	});
}

bootstrap().catch((error) => {
	console.error(error);
	process.exit(1);
});
