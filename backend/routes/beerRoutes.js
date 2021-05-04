import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Beer from '../models/beerModel.js';

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const beers = await Beer.find({});

		res.json(beers);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const beer = await Beer.findById(req.params.id);

		if (beer) {
			res.json(beer);
		} else {
			res.status(404).json({ message: 'This item is unavailable' });
		}
	})
);

export default router;
