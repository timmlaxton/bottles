import express from 'express';
const router = express.Router();
import { getProducts, getGinById } from '../controllers/productController.js';

router.route('/').get(getGins);
router.route('/:id').get(getProductById);

export default router;
