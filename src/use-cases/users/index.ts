import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const createUserUseCase = new CreateUserUseCase();
export const createUserController = new CreateUserController(createUserUseCase);