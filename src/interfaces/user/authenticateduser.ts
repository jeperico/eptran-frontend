import { IUser } from './user'

export interface IAuthenticatedUser {
  user: IUser
  token: string
  refresh: string
}
