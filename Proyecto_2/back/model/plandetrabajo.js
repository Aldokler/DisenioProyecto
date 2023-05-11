"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDeTrabajo = void 0;
var PlanDeTrabajo = /** @class */ (function () {
    function PlanDeTrabajo(id, annio, semestre, itinerarioActividades, creador) {
        this.id = id;
        this.annio = annio;
        this.semestre = semestre;
        this.itinerarioActividades = itinerarioActividades;
        this.creador = creador;
    }
    PlanDeTrabajo.prototype.getId = function () {
        return this.id;
    };
    PlanDeTrabajo.prototype.setId = function (id) {
        this.id = id;
    };
    PlanDeTrabajo.prototype.getAnnio = function () {
        return this.annio;
    };
    PlanDeTrabajo.prototype.setAnnio = function (annio) {
        this.annio = annio;
    };
    PlanDeTrabajo.prototype.getSemestre = function () {
        return this.semestre;
    };
    PlanDeTrabajo.prototype.setSemestre = function (semestre) {
        this.semestre = semestre;
    };
    PlanDeTrabajo.prototype.getItinerarioActividades = function () {
        return this.itinerarioActividades;
    };
    PlanDeTrabajo.prototype.setItinerarioActividades = function (itinerarioActividades) {
        this.itinerarioActividades = itinerarioActividades;
    };
    PlanDeTrabajo.prototype.getCreador = function () {
        return this.creador;
    };
    PlanDeTrabajo.prototype.setCreador = function (creador) {
        this.creador = creador;
    };
    return PlanDeTrabajo;
}());
exports.PlanDeTrabajo = PlanDeTrabajo;
