import express from 'express';
import tasks from '../controllers/tasks.controller';

const router = express.Router();

router.get('/:id', tasks.getByUserId);

export default router;