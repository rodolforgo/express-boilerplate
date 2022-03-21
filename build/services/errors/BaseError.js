"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
exports.BaseError = BaseError;
