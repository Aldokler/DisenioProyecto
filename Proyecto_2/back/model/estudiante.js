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
exports.Estudiante = void 0;
var usuario_1 = require("./usuario");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(id, nombre, apellido1, apellido2, correoElectronico, celular, sede, contraseña) {
        return _super.call(this, id, nombre, apellido1, apellido2, correoElectronico, celular, sede, contraseña) || this;
    }
    Estudiante.prototype.getId = function () {
        return this.id;
    };
    Estudiante.prototype.setId = function (id) {
        this.id = id;
    };
    Estudiante.prototype.getNombre = function () {
        return this.nombre;
    };
    
    Estudiante.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Estudiante.prototype.getApellido1 = function () {
        return this.apellido1;
    };
    Estudiante.prototype.setApellido1 = function (apellido1) {
        this.apellido1 = apellido1;
    };
    Estudiante.prototype.getApellido2 = function () {
        return this.apellido2;
    };
    Estudiante.prototype.setApellido2 = function (apellido2) {
        this.apellido2 = apellido2;
    };
    Estudiante.prototype.getCorreoElectronico = function () {
        return this.correoElectronico;
    };
    Estudiante.prototype.setCorreoElectronico = function (correoElectronico) {
        this.correoElectronico = correoElectronico;
    };
    Estudiante.prototype.getCelular = function () {
        return this.celular;
    };
    Estudiante.prototype.setCelular = function (celular) {
        this.celular = celular;
    };
    Estudiante.prototype.getSede = function () {
        return this.sede;
    };
    Estudiante.prototype.setSede = function (sede) {
        this.sede = sede;
    };
    Estudiante.prototype.getContraseñA = function () {
        return this.contraseña;
    };
    Estudiante.prototype.setContraseñA = function (contraseña) {
        this.contraseña = contraseña;
    };
    return Estudiante;
}(usuario_1.Usuario));
exports.Estudiante = Estudiante;
