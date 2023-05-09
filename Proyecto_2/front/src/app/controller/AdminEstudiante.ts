import { Observable, Subject } from "rxjs";
import { Estudiante } from "../model/estudiante";
import { TSede } from "../model/tsede";

export class AdminEstudiante{
    getEstudiante(carne: number): Observable<Estudiante> {
        return new Subject
    }
    public getEstudiantes(sede: String = ''): Observable<Estudiante[]>{
        return new Subject
    }
    public editarEstudiante(datosEstudiante: Estudiante): boolean{
        return true
    }
    public cargarListaEstudiantes(link: String){}
}
