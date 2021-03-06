import express from 'express';
import * as controller from "../controllers/entryController";

const router = express.Router();

router.get('/', controller.getEntries);
router.post('/', controller.postEntry);
router.get('/monthly', controller.getSumPerMonth);

export default router;