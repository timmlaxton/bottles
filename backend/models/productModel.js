import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		image: {
			type: String
		},
		brand: {
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
		countInStock: {
			type: Number,
			required: true,
			default: 0
		},
		featured: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
