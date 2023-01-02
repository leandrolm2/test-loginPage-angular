import { IUser } from '../_model/user';
import { SuccessMensagens, ErrorMensagens} from "../handler/messagesRegister"
import jsonData from "../database/dataUser";

export async function insertData(userPayloader: IUser): Promise<string> {
    const data = jsonData;
    const user: IUser = { username: userPayloader.username, password: userPayloader.password };
    if (!user.username) {
      const error = ErrorMensagens[401]
      throw error;
    }
  
    const foundUser: IUser | undefined = data.users.find(
      (users: { username: string; password: string; }) => users.username === user.username && users.password === user.password
    );
  
    if (foundUser) {
      const error = ErrorMensagens[403]
      throw error;
    }
  
    jsonData.users.push(user);
    return SuccessMensagens[200]
}