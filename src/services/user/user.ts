import { IUser } from '@/interfaces/user/user'
import { get } from '@/providers/api'

export const findUser = async (
  userId: string | undefined,
  token: string,
): Promise<IUser> => {
  const result = await get(`management/user/${userId}`, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  })
  return result as unknown as IUser
}
