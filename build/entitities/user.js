"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_id, _nick, _password) {
        this._id = _id;
        this._nick = _nick;
        this._password = _password;
    }
    getId() {
        return this._id;
    }
    getNick() {
        return this._nick;
    }
    getPassword() {
        return this._password;
    }
    static toUser(data) {
        return new User(data.id, data.nick, data.password);
    }
}
exports.User = User;
