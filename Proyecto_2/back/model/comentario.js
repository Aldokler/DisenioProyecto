"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comentario = void 0;
var Comentario = /** @class */ (function () {
    function Comentario(id, mensaje, emisor, fechaHora, comentarioOriginal, actividadId) {
        this.id = id;
        this.mensaje = mensaje;
        this.emisor = emisor;
        this.fechaHora = fechaHora;
        this.comentarioOriginal = comentarioOriginal;
        this.actividadId = actividadId;
    }
    Comentario.prototype.getId = function () {
        return this.id;
    };
    Comentario.prototype.setId = function (id) {
        this.id = id;
    };
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
    Comentario.prototype.getActividadId = function () {
        return this.actividadId;
    };
    Comentario.prototype.setActividadId = function (actividadId) {
        this.actividadId = actividadId;
    };
    return Comentario;
}());
exports.Comentario = Comentario;
