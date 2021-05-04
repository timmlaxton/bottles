import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import gins from './data/gins.js';
import beers from './data/beers.js';
import User from './models/userModel.js';
import Gin from './models/ginModel.js';
import Beer from './models/beerModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
	try {
		await Order.deleteMany();
		await Gin.deleteMany();
		await Beer.deleteMany();
		await User.deleteMany();

		const createdUsers = await User.insertMany(users);

		const adminUser = createdUsers[0]._id;

		const sampleGins = gins.map((gin) => {
			return { ...gin, user: adminUser };
		});

		const sampleBeers = beers.map((beer) => {
			return { ...beer, user: adminUser };
		});

		await Gin.insertMany(sampleGins);
		await Beer.insertMany(sampleBeers);
		console.log('Data Imported!');
		process.exit();
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Order.deleteMany();
		await Gin.deleteMany();
		await User.deleteMany();

		console.log('Data Destroyed!');
		process.exit();
	} catch (err) {
		console.error(`${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
