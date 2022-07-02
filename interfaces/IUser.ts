import { Model } from 'sequelize/types';

export interface INewUser extends Model {
  name: string,
  email: string,
  password: string,
  github?: string,
  isAdmin: number
}

export default interface IUser extends INewUser {
  id: number
// eslint-disable-next-line semi
}
