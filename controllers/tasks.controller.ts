import { Request, Response } from 'express';
import tasksService from '../services/tasks.service';

const getByUserId =async (req: Request, res: Response) => {
  const { id } = req.params;
  const tasks = await tasksService.getByUserId(id);

  res.status(200).json(tasks);
};

export default {
  getByUserId
};