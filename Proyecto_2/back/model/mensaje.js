"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensaje = void 0;
var Mensaje = /** @class */ (function () {
    function Mensaje(id, emisor, fechaHora, contenido, chatID) {
        this.id = id;
        this.emisor = emisor;
        this.fechaHora = fechaHora;
        this.contenido = contenido;
        this.chatID = chatID;
    }
    Mensaje.prototype.getId = function () {
        return this.id;
    };
    Mensaje.prototype.setId = function (id) {
        this.id = id;
    };
    Mensaje.prototype.getEmisor = function () {
        return this.emisor;
    };
    Mensaje.prototype.setEmisor = function (emisor) {
        this.emisor = emisor;
    };
    Mensaje.prototype.getFechaHora = function () {
        return this.fechaHora;
    };
    Mensaje.prototype.setFechaHora = function (fechaHora) {
        this.fechaHora = fechaHora;
    };
    Mensaje.prototype.getContenido = function () {
        return this.contenido;
    };
    Mensaje.prototype.setContenido = function (contenido) {
        this.contenido = contenido;
    };
    Mensaje.prototype.getChatID = function () {
        return this.id;
    };
    Mensaje.prototype.setChatID = function (id) {
        this.id = id;
    };
    return Mensaje;
}());
exports.Mensaje = Mensaje;
