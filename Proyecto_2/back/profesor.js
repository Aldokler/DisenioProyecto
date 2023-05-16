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
exports.Profesor = void 0;
var usuario_1 = require("./usuario");
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(id, nombre, apellido1, apellido2, correoElectronico, celular, sede, contraseña, telefonoOficina, fotografia, rol) {
        var _this = _super.call(this, id, nombre, apellido1, apellido2, correoElectronico, celular, sede, contraseña) || this;
        _this.telefonoOficina = telefonoOficina;
        _this.fotografia = fotografia;
        _this.rol = rol;
        return _this;
    }
    Profesor.prototype.getId = function () {
        return this.id;
    };
    Profesor.prototype.setId = function (id) {
        this.id = id;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Profesor.prototype.getApellido1 = function () {
        return this.apellido1;
    };
    Profesor.prototype.setApellido1 = function (apellido1) {
        this.apellido1 = apellido1;
    };
    Profesor.prototype.getApellido2 = function () {
        return this.apellido2;
    };
    Profesor.prototype.setApellido2 = function (apellido2) {
        this.apellido2 = apellido2;
    };
    Profesor.prototype.getCorreoElectronico = function () {
        return this.correoElectronico;
    };
    Profesor.prototype.setCorreoElectronico = function (correoElectronico) {
        this.correoElectronico = correoElectronico;
    };
    Profesor.prototype.getCelular = function () {
        return this.celular;
    };
    Profesor.prototype.setCelular = function (celular) {
        this.celular = celular;
    };
    Profesor.prototype.getSede = function () {
        return this.sede;
    };
    Profesor.prototype.setSede = function (sede) {
        this.sede = sede;
    };
    Profesor.prototype.getContraseñA = function () {
        return this.contraseña;
    };
    Profesor.prototype.setContraseñA = function (contraseña) {
        this.contraseña = contraseña;
    };
    Profesor.prototype.getTelefonoOficina = function () {
        return this.telefonoOficina;
    };
    Profesor.prototype.setTelefonoOficina = function (telefonoOficina) {
        this.telefonoOficina = telefonoOficina;
    };
    Profesor.prototype.getFotografia = function () {
        return this.fotografia;
    };
    Profesor.prototype.setFotografia = function (fotografia) {
        this.fotografia = fotografia;
    };
    Profesor.prototype.getRol = function () {
        return this.rol;
    };
    Profesor.prototype.setRol = function (rol) {
        this.rol = rol;
    };
    return Profesor;
}(usuario_1.Usuario));
exports.Profesor = Profesor;
