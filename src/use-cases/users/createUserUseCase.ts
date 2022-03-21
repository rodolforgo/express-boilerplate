import { User } from '../../entitities/user';
import { ICreateUserDTO } from './createUserDTO';

export class CreateUserUseCase {
  // Injetar interfaces dos repositórios.
  constructor() { }
  
  execute(data: ICreateUserDTO): User {
    const user = new User('123', data.name, data.password)
    return user;
  }
}