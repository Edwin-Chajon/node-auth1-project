const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {res.send('this is a thing :p')});

module.exports = server;
