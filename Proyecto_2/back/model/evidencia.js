"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evidencia = void 0;
var Evidencia = /** @class */ (function () {
    function Evidencia(id, asistencia, link) {
        this.id = id;
        this.asistencia = asistencia;
        this.link = link;
    }
    Evidencia.prototype.getId = function () {
        return this.id;
    };
    Evidencia.prototype.setId = function (id) {
        this.id = id;
    };
    Evidencia.prototype.getAsistencia = function () {
        return this.asistencia;
    };
    Evidencia.prototype.setAsistencia = function (asistencia) {
        this.asistencia = asistencia;
    };
    Evidencia.prototype.getLink = function () {
        return this.link;
    };
    Evidencia.prototype.setLink = function (link) {
        this.link = link;
    };
    return Evidencia;
}());
exports.Evidencia = Evidencia;
