import { Profesor } from "../model/profesor";
import { TRol } from "../model/trol";
import { TSede } from "../model/tsede";
import { ApiService } from "./DAO/SERVICES/api.service";

export class AdminProfesores{

    constructor(private DAO: ApiService){}

    public getProfesor(id: String): Profesor{
        return new Profesor('', '', '', '', '', '', TSede.CA, '', '', '', TRol.GUIA)
    }
    public editarDatosProfesor(id: String): boolean{
        return true
    }
    public getProfesores(): Profesor[]{
        return []
    }

    public get(){
        console.log('4');
    }
    public getprofes(){
        this.DAO.getProfesores().subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }
    public verificarCorreoExistente(correo: String): boolean{
        return true
    }

}