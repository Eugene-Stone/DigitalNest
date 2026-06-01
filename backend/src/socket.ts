import type { Server as HttpServer } from 'node:http';
import { Server } from 'socket.io';
import { env } from './config/env.js';

let io: Server;

export function initSocket(server: HttpServer) {
	io = new Server(server, {
		cors: {
			origin: env.clientUrl,
			credentials: true
		}
	});

	io.on('connection', (socket) => {
		socket.on('admin:join', () => {
			socket.join('admins');
		});
	});

	return io;
}

export function getIo() {
	if (!io) throw new Error('Socket.io is not initialized');
	return io;
}
