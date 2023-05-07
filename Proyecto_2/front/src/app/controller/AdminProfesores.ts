import { Injectable } from "@angular/core";
import { Profesor } from "../model/profesor";
import { TRol } from "../model/trol";
import { TSede } from "../model/tsede";
import { ApiService } from "./DAO/SERVICES/api.service";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AdminProfesores{

    constructor(private DAO: ApiService){}

    public getProfesor(id: String): Profesor{
        return new Profesor('', '', '', '', '', '', TSede.CA, '', '', '', TRol.GUIA)
    }
    public editarDatosProfesor(id: String): boolean{
        return true
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