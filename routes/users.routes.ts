import express from 'express';
import users from '../controllers/users.controller';

const router = express.Router();

router.get('/', users.getAll);
router.post('/', users.create);

export default router;