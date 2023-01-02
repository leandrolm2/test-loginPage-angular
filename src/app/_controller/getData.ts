import { IUser } from "../_model/user";
import  jsonData  from "../database/dataUser"
import { ErrorMensagens } from "../handler/messageLogin";

interface IDataUser {
  users: IUser[];
}

export async function getUser(user: IUser): Promise<number> {
  const data: IDataUser = jsonData;

  const foundUser: IUser | undefined = data.users.find(
    (users: { username: string; password: string; }) => users.username === user.username && users.password === user.password
  );

  if (!user.username) {
    const error = ErrorMensagens[401]
    throw error;
  }

  if (!foundUser) {
    const error = ErrorMensagens[404]
    throw error;
  }

  return 200;
}