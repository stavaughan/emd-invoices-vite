import express from 'express';

import documentsController from '../controllers/documentsController';
import { protect } from '../middleware/authMiddleware';

const { getFile, deleteFile, upLoadFile } = documentsController;

const documentsRouter = express.Router();

documentsRouter.route('/:id').get(protect, getFile).delete(protect, deleteFile);
documentsRouter.route('/').post(protect, upLoadFile);

export default documentsRouter;
