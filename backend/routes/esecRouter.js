import express from 'express';

import esecController from '../controllers/esecController';
import requestControllers from '../controllers/requestControllers';
import { protect } from '../middleware/authMiddleware';

const { deleteItem } = requestControllers;
const { encString, decString, updateEsec } = esecController;

const esecRouter = express.Router();

esecRouter.route('/enc').post(protect, encString);
esecRouter.route('/dec').post(protect, decString);

esecRouter.route('/:id').patch(protect, updateEsec).delete(protect, deleteItem);

export default esecRouter;
