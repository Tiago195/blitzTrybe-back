import { INewUser } from '../interfaces/IUser';
import User from '../models/user.model';

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const create =async ({name, email, password, github, isAdmin}: INewUser) => {
  const user = await User.findOrCreate({
    where: {email, password},
    defaults: {
      name, email, password, github, isAdmin
    }
  });

  return user;
};

export default {
  getAll,
  create
};