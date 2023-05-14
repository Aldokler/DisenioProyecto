"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoGuia = void 0;
var EquipoGuia = /** @class */ (function () {
    function EquipoGuia(id, miembros, año, semestre) {
        this.id = id;
        this.miembros = miembros;
        this.año = año;
        this.semestre = semestre;
    }
    EquipoGuia.prototype.getId = function () {
        return this.id;
    };
    EquipoGuia.prototype.setId = function (id) {
        this.id = id;
    };
    EquipoGuia.prototype.getMiembros = function () {
        return this.miembros;
    };
    EquipoGuia.prototype.setMiembros = function (miembros) {
        this.miembros = miembros;
    };
    EquipoGuia.prototype.getAño = function () {
        return this.año;
    };
    EquipoGuia.prototype.setAño = function (año) {
        this.año = año;
    };
    EquipoGuia.prototype.getSemestre = function () {
        return this.semestre;
    };
    EquipoGuia.prototype.setSemestre = function (semestre) {
        this.semestre = semestre;
    };
    return EquipoGuia;
}());
exports.EquipoGuia = EquipoGuia;
