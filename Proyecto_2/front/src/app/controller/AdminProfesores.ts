import { Injectable } from "@angular/core";
import { Profesor } from "../model/profesor";
import { TRol } from "../model/trol";
import { TSede } from "../model/tsede";
import { ApiService } from "./DAO/SERVICES/api.service";
import { Observable, Subject, map } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AdminProfesores{

    constructor(private DAO: ApiService){}

    public addProfesor(profesor: Profesor): boolean{
        var response = ''
        this.DAO.addProfesor(profesor).pipe(
            map((data:any) => {
                response = data.status
            })
        )
        return response == 'Profesor agregado'
    }

    public getProfesor(id: String): Observable<Profesor>{
        return this.DAO.getProfesor(id).pipe(
            map((data: any) => { 
                const profesorJson = data.profesor[0];
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
                );
            })
        );
    }

    public editarDatosProfesor(profesor: Profesor): boolean{
        var response = ''
        this.DAO.modificarProfesor(profesor).pipe(
            map((data:any) => {
                response = data.status
            })
        )
        return response == 'Profesor modificado'
    }
    public getProfesores(): Observable<Profesor[]>{
        return this.DAO.getProfesores().pipe(
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

    public verificarCorreoExistente(correo: String): boolean{
        return true
    }

}