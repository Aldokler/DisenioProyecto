import { Observable, Subject, map } from "rxjs";
import { Estudiante } from "../model/estudiante";
import { TSede } from "../model/tsede";
import { ApiService } from "./DAO/SERVICES/api.service";

export class AdminEstudiante{

    constructor(private DAO: ApiService){}

    public addEstudiante(estudiante: Estudiante): Observable<boolean>{
        return this.DAO.addEstudiante(
            estudiante.getId(),
            estudiante.getNombre(),
            estudiante.getApellido1(),
            estudiante.getApellido2(),
            estudiante.getCorreoElectronico(),
            estudiante.getCelular(),
            estudiante.getContraseñA(),
            estudiante.getSede()
        ).pipe(
            map((data:any) => {
                return data.status == '0'
            })
        )
    }
    public getEstudiantes(Sort: number): Observable<Estudiante[]>{
        return this.DAO.getEstudiantes(Sort).pipe(
            map((data: any) => { 
                const json = data.estudiantes;
                return json.map((json: any) => {
                    return new Estudiante(
                        json.id,
                        json.nombre,
                        json.apellido1,
                        json.apellido2,
                        json.correoElectronico,
                        json.celular,
                        json.sede,
                        json.contraseña
                    )
                });
            })
        );
    }

    public getEstudiante(carne: number): Observable<Estudiante> {
        return new Subject
    }
    public editarEstudiante(datosEstudiante: Estudiante): boolean{
        return true
    }
    public cargarListaEstudiantes(link: String){}
}
