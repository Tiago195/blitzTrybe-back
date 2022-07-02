import IUser, { INewUser } from '../interfaces/IUser';
import User from '../models/user.model';

const getAll = async (): Promise<IUser[]> => {
  const users = await User.findAll({
    where: {isAdmin: 0}
  });

  return users as IUser[];
};

const create =async ({name, email, password, github, isAdmin = 0}: INewUser) => {
  const [user] = await User.findOrCreate({
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