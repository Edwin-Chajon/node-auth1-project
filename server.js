const express = require('express');

const server = express();

const apiRouter = require('./api/api_router');

server.use(express.json());

server.use('/api', apiRouter);

module.exports = server;
