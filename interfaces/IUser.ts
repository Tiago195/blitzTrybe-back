export interface INewUser {
  name: string,
  email: string,
  password: string,
  github?: string,
  isAdmin: boolean
}

export default interface IUser extends INewUser {
  id: number
// eslint-disable-next-line semi
}