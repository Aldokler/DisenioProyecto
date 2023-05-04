import { Estudiante } from "../model/estudiante";
import { TSede } from "../model/tsede";

export class AdminEstudiante{
    getEstudiante(carne: number): Estudiante {
        return new Estudiante('', '', '', '', '', '', TSede.CA, '')
    }
    public getEstudiantes(sede: String = ''): Estudiante[]{
        return []
    }
    public editarEstudiante(datosEstudiante: Estudiante): boolean{
        return true
    }
    public cargarListaEstudiantes(link: String){}
}
