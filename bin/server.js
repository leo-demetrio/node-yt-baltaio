'use strict'

const express = require('express');
const debug = require('debug')('server');
const http = require('http');


const app = require('./../src/app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();


server.listen(port, () => {
	console.log('Running port ' + port);
});
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {

	const port = parseInt(val,10);

	if (isNaN(port)) return val;

	if (port >= 0) return port;

	return false;

}
function onError(error) {
	if (error.syscall !== 'listen') throw error;

	const bind = typeof port === 'string' ? 
	'Pipe ' + port :
	'Port ' +port;

	switch(error.code) {
		case 'EACCES':
			console.error(bind+ 'requirs elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind+ 'requirs elevated privileges');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' +addr
		: 'port ' +addr.port;

	debug('Listening on ' +bind);
}