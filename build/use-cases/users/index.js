"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const createUserController_1 = require("./createUserController");
const createUserUseCase_1 = require("./createUserUseCase");
const createUserUseCase = new createUserUseCase_1.CreateUserUseCase();
exports.createUserController = new createUserController_1.CreateUserController(createUserUseCase);
