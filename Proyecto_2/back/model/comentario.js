"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comentario = void 0;
var Comentario = /** @class */ (function () {
    function Comentario(mensaje, emisor, fechaHora, comentarioOriginal) {
        this.mensaje = mensaje;
        this.emisor = emisor;
        this.fechaHora = fechaHora;
        this.comentarioOriginal = comentarioOriginal;
    }
    Comentario.prototype.getMensaje = function () {
        return this.mensaje;
    };
    Comentario.prototype.setMensaje = function (mensaje) {
        this.mensaje = mensaje;
    };
    Comentario.prototype.getEmisor = function () {
        return this.emisor;
    };
    Comentario.prototype.setEmisor = function (emisor) {
        this.emisor = emisor;
    };
    Comentario.prototype.getFechaHora = function () {
        return this.fechaHora;
    };
    Comentario.prototype.setFechaHora = function (fechaHora) {
        this.fechaHora = fechaHora;
    };
    Comentario.prototype.getComentarioOriginal = function () {
        return this.comentarioOriginal;
    };
    Comentario.prototype.setComentarioOriginal = function (comentarioOriginal) {
        this.comentarioOriginal = comentarioOriginal;
    };
    return Comentario;
}());
exports.Comentario = Comentario;
