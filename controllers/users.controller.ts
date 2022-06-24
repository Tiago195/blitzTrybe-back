import { Request, Response } from 'express';
import usersService from '../services/users.service';

const getAll = async (_req: Request, res: Response) => {
  const users = await usersService.getAll();

  res.status(200).json(users);
};

export default {
  getAll
};