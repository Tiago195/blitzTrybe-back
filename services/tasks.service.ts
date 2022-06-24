import Task from '../models/task.model';
import User from '../models/user.model';

const getByUserId =async (id: string) => {
  const tasks = await Task.findAll({
    where: {user_id: id},
    attributes: {exclude: ['user_id']}
  });

  return tasks;
};

export default {
  getByUserId
};