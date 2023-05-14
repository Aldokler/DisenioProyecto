import { Observable } from "rxjs/internal/Observable";
import { EquipoGuia } from "../model/equipoguia";
import { Profesor } from "../model/profesor";
import { Subject, map } from "rxjs";
import { ApiService } from "./DAO/SERVICES/api.service";

export class AdminEquipoGuia{

    constructor(private DAO: ApiService){}

    public getEquiposGuia(): Observable<EquipoGuia[]>{
        return this.DAO.getEquiposGuia().pipe(
            map((data: any) => { 
                const json = data.equipos;
                let i = 0;
                return json.map((equipo: any) => {
                    i++
                    return new EquipoGuia(
                        i,
                        [],
                        json.año,
                        json.semestre
                    )
                });
            })
        );
    }
    public crearEquipo(equipo: EquipoGuia): Observable<boolean>{
        return this.DAO.addEquipoGuia(equipo).pipe(
            map((data:any) => {
                return data.status == '0'
            })
        )
    }
    public agregarProfesor(idEG: String, idP: String): Observable<boolean>{
        return this.DAO.addProfesorToEquipoGuia(idEG, idP).pipe(
            map((data:any) => {
                return data.status == '0'
            })
        )
    }
    public sacarProfesor(idEG: String, idP: String): Observable<boolean>{
        return this.DAO.kickProfesor(idEG, idP).pipe(
            map((data:any) => {
                return data.status == '0'
            })
        )
    }
    public definirCoordinador(profesor: Profesor): Observable<boolean>{
        return this.DAO.defCoordinador(profesor).pipe(
            map((data:any) => {
                return data.status == '0'
            })
        )
    }
    public getProfesoresDeEquipoGuia(id: Number): Observable<Profesor[]>{
        return this.DAO.getProfesoresDeEquipoGuia(id).pipe(
            map((data: any) => { 
                const profesoresJson = data.profesores;
                return profesoresJson.map((profesorJson: any) => {
                    return new Profesor(
                        profesorJson.id,
                        profesorJson.nombre,
                        profesorJson.apellido1,
                        profesorJson.apellido2,
                        profesorJson.correoElectronico,
                        profesorJson.celular,
                        profesorJson.sede,
                        profesorJson.contraseña,
                        profesorJson.telefonoOficina,
                        profesorJson.fotografia,
                        profesorJson.rol
                    )
                });
            })
        );
    }
}