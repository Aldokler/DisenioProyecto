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

    public addProfesor(profesor: Profesor): Observable<boolean>{
        return this.DAO.addProfesor(
            profesor.getId(),
            profesor.getNombre(),
            profesor.getApellido1(),
            profesor.getApellido2(),
            profesor.getCorreoElectronico(),
            profesor.getCelular(),
            profesor.getContraseñA(),
            profesor.getSede(),
            profesor.getTelefonoOficina(),
            profesor.getRol(),
            profesor.getFotografia()
        ).pipe(
            map((data:any) => {
                return data.status == 'Profesor agregado'
            })
        )
    }

    public getProfesor(id: String): Observable<Profesor>{
        return this.DAO.getProfesor(id).pipe(
            map((data: any) => {
                const profesorJson = data.profesor[0];
                if (profesorJson == undefined){
                    return new Profesor('', '', '', '', '', '', TSede.CA, '', '', "", TRol.GUIA)
                } else {
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
                }
            })
        );
    }

    public editarDatosProfesor(profesor: Profesor): Observable<boolean>{
        return this.DAO.modificarProfesor(profesor.getId(),profesor.getNombre(), profesor.getApellido1(), profesor.getApellido2(), profesor.getCorreoElectronico() , 
        profesor.getCelular() , profesor.getContraseñA() , profesor.getSede() , profesor.getTelefonoOficina(), profesor.getRol(), profesor.getFotografia()).pipe(
            map((data:any) => {
                return data.status == 'Profesor modificado'
            })
        )
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