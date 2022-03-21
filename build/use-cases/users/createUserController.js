"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CustomError_1 = require("../../services/errors/CustomError");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, password } = req.body;
                console.log('a');
                const response = this.createUserUseCase.execute({ name, password });
                res.status(201).send(response);
            }
            catch (err) {
                if (err instanceof CustomError_1.CustomError) {
                    res.status(err.code).send({ message: err.message });
                }
            }
        });
    }
}
exports.CreateUserController = CreateUserController;
