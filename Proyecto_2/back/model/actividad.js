"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actividad = void 0;
var Actividad = /** @class */ (function () {
    function Actividad(semana, tipo, nombre, fechaHora, responsables, diasAnunciar, diasRecordatorio, modalidad, link, afiche, estado, evidencia, comentarios, fechaCancelacion, observacion, fechaAPublicar) {
        this.semana = semana;
        this.tipo = tipo;
        this.nombre = nombre;
        this.fechaHora = fechaHora;
        this.responsables = responsables;
        this.diasAnunciar = diasAnunciar;
        this.diasRecordatorio = diasRecordatorio;
        this.modalidad = modalidad;
        this.link = link;
        this.afiche = afiche;
        this.estado = estado;
        this.evidencia = evidencia;
        this.comentarios = comentarios;
        this.fechaCancelacion = fechaCancelacion;
        this.observacion = observacion;
        this.fechaAPublicar = fechaAPublicar;
    }
    Actividad.prototype.getSemana = function () {
        return this.semana;
    };
    Actividad.prototype.setSemana = function (semana) {
        this.semana = semana;
    };
    Actividad.prototype.getTipo = function () {
        return this.tipo;
    };
    Actividad.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Actividad.prototype.getNombre = function () {
        return this.nombre;
    };
    Actividad.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Actividad.prototype.getFechaHora = function () {
        return this.fechaHora;
    };
    Actividad.prototype.setFechaHora = function (fechaHora) {
        this.fechaHora = fechaHora;
    };
    Actividad.prototype.getResponsables = function () {
        return this.responsables;
    };
    Actividad.prototype.setResponsables = function (responsables) {
        this.responsables = responsables;
    };
    Actividad.prototype.getDiasAnunciar = function () {
        return this.diasAnunciar;
    };
    Actividad.prototype.setDiasAnunciar = function (diasAnunciar) {
        this.diasAnunciar = diasAnunciar;
    };
    Actividad.prototype.getDiasRecordatorio = function () {
        return this.diasRecordatorio;
    };
    Actividad.prototype.setDiasRecordatorio = function (diasRecordatorio) {
        this.diasRecordatorio = diasRecordatorio;
    };
    Actividad.prototype.getModalidad = function () {
        return this.modalidad;
    };
    Actividad.prototype.setModalidad = function (modalidad) {
        this.modalidad = modalidad;
    };
    Actividad.prototype.getLink = function () {
        return this.link;
    };
    Actividad.prototype.setLink = function (link) {
        this.link = link;
    };
    Actividad.prototype.getAfiche = function () {
        return this.afiche;
    };
    Actividad.prototype.setAfiche = function (afiche) {
        this.afiche = afiche;
    };
    Actividad.prototype.getEstado = function () {
        return this.estado;
    };
    Actividad.prototype.setEstado = function (estado) {
        this.estado = estado;
    };
    Actividad.prototype.getEvidencia = function () {
        return this.evidencia;
    };
    Actividad.prototype.setEvidencia = function (evidencia) {
        this.evidencia = evidencia;
    };
    Actividad.prototype.getComentarios = function () {
        return this.comentarios;
    };
    Actividad.prototype.setComentarios = function (comentarios) {
        this.comentarios = comentarios;
    };
    Actividad.prototype.getFechaCancelacion = function () {
        return this.fechaCancelacion;
    };
    Actividad.prototype.setFechaCancelacion = function (fechaCancelacion) {
        this.fechaCancelacion = fechaCancelacion;
    };
    Actividad.prototype.getObservacion = function () {
        return this.observacion;
    };
    Actividad.prototype.setObservacion = function (observacion) {
        this.observacion = observacion;
    };
    Actividad.prototype.getFechaAPublicar = function () {
        return this.fechaAPublicar;
    };
    Actividad.prototype.setFechaAPublicar = function (fechaAPublicar) {
        this.fechaAPublicar = fechaAPublicar;
    };
    return Actividad;
}());
exports.Actividad = Actividad;
