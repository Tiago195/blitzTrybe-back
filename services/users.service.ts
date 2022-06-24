import User from '../models/user.model';

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

export default {
  getAll
};