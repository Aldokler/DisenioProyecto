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
                        json.contraseña,
                        json.foto
                    )
                });
            })
        );
    }
    public getEstudiantesPorSede(ProfesorID: string): Observable<Estudiante[]>{
        return this.DAO.getEstudiantesPorSede(ProfesorID).pipe(
            map((data: any) => { 
                const json = data.estudiantes;
                console.log(data)
                return json.map((json: any) => {
                    return new Estudiante(
                        json.id,
                        json.nombre,
                        json.apellido1,
                        json.apellido2,
                        json.correoElectronico,
                        json.celular,
                        json.sede,
                        json.contraseña,
                        json.foto
                    )
                });
            })
        );
    }

    public getEstudiante(carne: string): Observable<Estudiante> {
        return this.DAO.getEstudiante(carne).pipe(
            map((data: any) => {
                const Json = data.estudiante[0];
                if (Json == undefined){
                    return new Estudiante('', '', '', '', '', '', TSede.CA, "", "")
                } else {
                    return new Estudiante(
                        Json.id,
                        Json.nombre,
                        Json.apellido1,
                        Json.apellido2,
                        Json.correoElectronico,
                        Json.celular,
                        Json.sede,
                        Json.contraseña,
                        Json.foto
                    );
                }
            })
        );
    }

    public getEstudianteByCorreo(correo: string): Observable<Estudiante> {
        return this.DAO.getEstudianteByCorreo(correo).pipe(
            map((data: any) => {
                const Json = data.estudiante[0];
                if (Json == undefined){
                    return new Estudiante('', '', '', '', '', '', TSede.CA, "", "")
                } else {
                    return new Estudiante(
                        Json.id,
                        Json.nombre,
                        Json.apellido1,
                        Json.apellido2,
                        Json.correoElectronico,
                        Json.celular,
                        Json.sede,
                        Json.contraseña,
                        Json.foto
                    );
                }
            })
        );
    }
    public editarEstudiante(estudiante: Estudiante): Observable<boolean>{
        return this.DAO.modificarEstudiante(estudiante.getId(),estudiante.getCelular(), estudiante.getFoto()).pipe(
            map((data:any) => {
                return data.status == 'Estudiante modificado'
            })
        )
    }

    public cargarListaEstudiantes(link: String){}
}
