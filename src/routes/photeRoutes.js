import { Router } from 'express';
import multer from 'multer';

import PhoteController from '../controllers/PhoteController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), PhoteController.store);

export default router;
