import { Observable, map, tap } from "rxjs"
import { Profesor } from "../model/profesor"
import { TRol } from "../model/trol"
import { TSede } from "../model/tsede"
import { Usuario } from "../model/usuario"
import { ApiService } from "./DAO/SERVICES/api.service"

export class login {

    constructor(private DAO: ApiService){}

    public ingresar(user: string, pass: string): Observable<Boolean>{
        return this.DAO.login(user, pass).pipe(
            map((data:any) => {
                return data.check_user
            })
        )
    }
    public cambiarContraseña(correo:String): boolean{ return true }
    public solicitarCambioContraseña(correo: String): boolean{ return true }
    public verificarCodigo(codigo: String): boolean{ return true }
}