import { Profesor } from "../model/profesor"
import { TRol } from "../model/trol"
import { TSede } from "../model/tsede"
import { Usuario } from "../model/usuario"

export class login {
    public ingresar(correo: String, contraseña: String): Usuario{ 
        return new Profesor('', '', '', '', '', '', TSede.CA, '', '', '', TRol.GUIA)
    }
    public cambiarContraseña(correo:String): boolean{ return true }
    public solicitarCambioContraseña(correo: String): boolean{ return true }
    public verificarCodigo(codigo: String): boolean{ return true }
}