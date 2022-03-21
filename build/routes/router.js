"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = require("../use-cases/users");
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/signup', users_1.createUserController.execute);
