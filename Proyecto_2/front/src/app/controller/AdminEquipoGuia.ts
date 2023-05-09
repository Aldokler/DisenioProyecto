import { Observable } from "rxjs/internal/Observable";
import { EquipoGuia } from "../model/equipoguia";
import { Profesor } from "../model/profesor";
import { Subject } from "rxjs";

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
    public verMiembrosEquipo(): Observable<EquipoGuia>{
        return new Subject
    }
}