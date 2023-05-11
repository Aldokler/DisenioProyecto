"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TSede = void 0;
var TSedeValues = {
    CA: { codigo: 'CA', descripcion: 'Campus tecnológico central Cartago' },
    SJ: { codigo: 'SJ', descripcion: 'Campus tecnológico local San José' },
    LI: { codigo: 'LI', descripcion: 'Centro académico de Limón' },
    AL: { codigo: 'AL', descripcion: 'Centro académico de Alajuela' },
    SC: { codigo: 'SC', descripcion: 'Campus tecnológico local cartago' }
};
var TSede;
(function (TSede) {
    TSede["CA"] = "CA";
    TSede["SJ"] = "SJ";
    TSede["LI"] = "LI";
    TSede["AL"] = "AL";
    TSede["SC"] = "SC";
})(TSede = exports.TSede || (exports.TSede = {}));
var sedeSeleccionada = TSede.AL;
var valorSede = Object.values(TSedeValues).find(function (value) { return value.codigo === sedeSeleccionada.toString(); });
