import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

const beerSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	brand: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	reviews: [reviewSchema],
	rating: {
		type: Number,
		required: true,
		default: 0
	},
	numReviews: {
		type: Number,
		requireD: true,
		default: 0
	},
	price: {
		type: Number,
		requireD: true,
		default: 0
	},
	countInStock: {
		type: Number,
		requireD: true,
		default: 0
	}
});

const Beer = mongoose.model('Beer', beerSchema);

export default Beer;
