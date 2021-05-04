const notFound = (req, res, net) => {
	const error = new Error('Not Found - ${req.oringinalUrl');
	res.status(404);
	next(error);
};

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.StatusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stavk: process.env.NODE_ENV === 'production' ? null : err.stack
	});
};

export { notFound, errorHandler };
