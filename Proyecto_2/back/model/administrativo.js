"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrativo = void 0;
var usuario_1 = require("./usuario");
var Administrativo = /** @class */ (function (_super) {
    __extends(Administrativo, _super);
    function Administrativo(id, nombre, apellido1, apellido2, correoElectronico, celular, sede, contraseña, telefonoOficina) {
        var _this = _super.call(this, id, nombre, apellido1, apellido2, correoElectronico, celular, sede, contraseña) || this;
        _this.telefonoOficina = telefonoOficina;
        return _this;
    }
    Administrativo.prototype.getId = function () {
        return this.id;
    };
    Administrativo.prototype.setId = function (id) {
        this.id = id;
    };
    Administrativo.prototype.getNombre = function () {
        return this.nombre;
    };
    Administrativo.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Administrativo.prototype.getApellido1 = function () {
        return this.apellido1;
    };
    Administrativo.prototype.setApellido1 = function (apellido1) {
        this.apellido1 = apellido1;
    };
    Administrativo.prototype.getApellido2 = function () {
        return this.apellido2;
    };
    Administrativo.prototype.setApellido2 = function (apellido2) {
        this.apellido2 = apellido2;
    };
    Administrativo.prototype.getCorreoElectronico = function () {
        return this.correoElectronico;
    };
    Administrativo.prototype.setCorreoElectronico = function (correoElectronico) {
        this.correoElectronico = correoElectronico;
    };
    Administrativo.prototype.getCelular = function () {
        return this.celular;
    };
    Administrativo.prototype.setCelular = function (celular) {
        this.celular = celular;
    };
    Administrativo.prototype.getSede = function () {
        return this.sede;
    };
    Administrativo.prototype.setSede = function (sede) {
        this.sede = sede;
    };
    Administrativo.prototype.getContraseñA = function () {
        return this.contraseña;
    };
    Administrativo.prototype.setContraseñA = function (contraseña) {
        this.contraseña = contraseña;
    };
    Administrativo.prototype.getTelefonoOficina = function () {
        return this.telefonoOficina;
    };
    Administrativo.prototype.setTelefonoOficina = function (telefonoOficina) {
        this.telefonoOficina = telefonoOficina;
    };
    return Administrativo;
}(usuario_1.Usuario));
exports.Administrativo = Administrativo;
