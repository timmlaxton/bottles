const express = require('express');
const beers = require('./data/beers');
const gins = require('./data/gins');

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/api/beers', (req, res) => {
	res.json(beers);
});

app.get('/api/gins', (req, res) => {
	res.json(gins);
});

app.get('/api/beers/:id', (req, res) => {
	const beer = beers.find((p) => p._id === req.params.id);
	res.json(beer);
});

app.get('/api/gins/:id', (req, res) => {
	const gin = gins.find((p) => p._id === req.params.id);
	res.json(gin);
});

app.listen(5000, console.log('Server running on port 5000'));
