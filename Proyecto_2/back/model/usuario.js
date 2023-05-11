"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, apellido1, apellido2, correoElectronico, celular, sede, contraseña) {
        this.id = id;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.correoElectronico = correoElectronico;
        this.celular = celular;
        this.sede = sede;
        this.contraseña = contraseña;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
