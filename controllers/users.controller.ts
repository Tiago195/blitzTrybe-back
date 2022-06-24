import { Request, Response } from 'express';
import usersService from '../services/users.service';

const getAll = async (_req: Request, res: Response) => {
  const users = await usersService.getAll();

  res.status(200).json(users);
};

const create = async (req: Request, res: Response) => {
  const user = await usersService.create(req.body);

  res.status(201).json(user);
};

export default {
  getAll,
  create
};