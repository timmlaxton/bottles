import express from 'express';
const router = express.Router();
import { getGins, getGinById } from '../controllers/ginController.js';

router.route('/').get(getGins);
router.route('/:id').get(getGinById);

export default router;
