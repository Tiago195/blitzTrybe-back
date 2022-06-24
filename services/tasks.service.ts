import Task from '../models/task.model';
import User from '../models/user.model';

const getByUserId =async (id: string) => {
  const tasks = await Task.findAll({
    where: {user_id: id},
    include: {as: 'tasks', model: User}
  });

  return tasks;
};

export default {
  getByUserId
};