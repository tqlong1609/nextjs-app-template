import { UserService } from '@/services'

export async function getUsers() {
  const users = await new UserService().getUsers()
  return users.users
}
