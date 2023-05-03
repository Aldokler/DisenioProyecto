import { EquipoGuia } from "../model/equipoguia";
import { Profesor } from "../model/profesor";

export class AdminEquipoGuia{
    public crearEquipo(equipo: EquipoGuia): boolean{
        return true
    }
    public agregarProfesor(profesor: Profesor){}
    public sacarProfesor(id: String): boolean{
        return true
    }
    public definirCoordinador(id: String): boolean{
        return true
    }
    public verMiembrosEquipo(): EquipoGuia{
        return new EquipoGuia([], 0, 0)
    }
}