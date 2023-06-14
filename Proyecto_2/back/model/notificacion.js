"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacion = void 0;
var Notificacion = /** @class */ (function () {
    function Notificacion(id, fechaHora, contenido, idEmisor, emisorTipo, emisor) {
        this.id = id;
        this.fechaHora = fechaHora;
        this.contenido = contenido;
        this.idEmisor = idEmisor;
        this.emisorTipo = emisorTipo;
        this.emisor = emisor;
    }
    Notificacion.prototype.getId = function () {
        return this.id;
    };
    Notificacion.prototype.setId = function (id) {
        this.id = id;
    };
    Notificacion.prototype.getFechaHora = function () {
        return this.fechaHora;
    };
    Notificacion.prototype.setFechaHora = function (fechaHora) {
        this.fechaHora = fechaHora;
    };
    Notificacion.prototype.getContenido = function () {
        return this.contenido;
    };
    Notificacion.prototype.setContenido = function (contenido) {
        this.contenido = contenido;
    };
    Notificacion.prototype.getIdEmisor = function () {
        return this.idEmisor;
    };
    Notificacion.prototype.setIdEmisor = function (idEmisor) {
        this.idEmisor = idEmisor;
    };
    Notificacion.prototype.getEmisor = function () {
        return this.emisor;
    };
    Notificacion.prototype.setEmisor = function (Emisor) {
        this.emisor = Emisor;
    };
    Notificacion.prototype.getmisorTipo = function () {
        return this.emisorTipo;
    };
    Notificacion.prototype.setEmisorTipo = function (emisorTipo) {
        this.emisorTipo = emisorTipo;
    };
    return Notificacion;
}());
exports.Notificacion = Notificacion;
