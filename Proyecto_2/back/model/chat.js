"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var Chat = /** @class */ (function () {
    function Chat(id, host) {
        this.id = id;
        this.host = host;
    }
    Chat.prototype.getId = function () {
        return this.id;
    };
    Chat.prototype.setId = function (id) {
        this.id = id;
    };
    Chat.prototype.getHost = function () {
        return this.host;
    };
    Chat.prototype.setHost = function (host) {
        this.host = host;
    };
    return Chat;
}());
exports.Chat = Chat;
