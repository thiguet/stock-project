const http = require('http');
const express = require('express');
const cors = require('cors');
const RouteParser = require('./src/routeParser.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routeParser = new RouteParser(app);
routeParser.parseRoutes();

app.use(cors());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
})

const server = http.createServer(app);
server.listen(3004);