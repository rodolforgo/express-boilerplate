"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
const BaseError_1 = require("./BaseError");
class CustomError extends BaseError_1.BaseError {
    constructor(code, message) {
        super(code, message);
    }
}
exports.CustomError = CustomError;
