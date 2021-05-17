import asyncHandler from 'express-async-handler';
import Gin from '../models/ginModel.js';

const getGins = asyncHandler(async (req, res) => {
	const gins = await Gin.find({});

	res.json(gins);
});

const getGinById = asyncHandler(async (req, res) => {
	const gin = await Gin.findById(req.params.id);

	if (gin) {
		res.json(gin);
	} else {
		res.status(404).json({ message: 'This item is unavailable' });
	}
});

export { getGins, getGinById };
