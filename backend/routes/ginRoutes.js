import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Gin from '../models/ginModel.js';

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const gins = await Gin.find({});

		res.json(gins);
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const gin = await Gin.findById(req.params.id);

		if (gin) {
			res.json(gin);
		} else {
			res.status(404).json({ message: 'This item is unavailable' });
		}
	})
);

export default router;
