import { Profesor } from "../model/profesor";
import { TRol } from "../model/trol";
import { TSede } from "../model/tsede";

export class AdminProfesores{
    public getProfesor(id: String): Profesor{
        return new Profesor('', '', '', '', '', '', TSede.CA, '', '', '', TRol.GUIA)
    }
    public editarDatosProfesor(id: String): boolean{
        return true
    }
    public getProfesores(): Profesor[]{
        return []
    }
    public verificarCorreoExistente(correo: String): boolean{
        return true
    }
}