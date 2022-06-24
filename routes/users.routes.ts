import express from 'express';
import users from '../controllers/users.controller';

const router = express.Router();

router.get('/', users.getAll);

export default router;