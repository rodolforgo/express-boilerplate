"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const user_1 = require("../../entitities/user");
class CreateUserUseCase {
    // Injetar interfaces dos repositórios.
    constructor() { }
    execute(data) {
        const user = new user_1.User('123', data.name, data.password);
        console.log(user);
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
