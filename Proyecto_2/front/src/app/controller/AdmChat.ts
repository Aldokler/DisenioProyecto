import { Observable, map } from "rxjs";
import { Notificacion } from "../model/notificacion";
import { ApiService } from "./DAO/SERVICES/api.service";
import { Chat } from "../model/chat";
import { Mensaje } from "../model/mensaje";
import { Usuario } from "../model/usuario";
import { Profesor } from "../model/profesor";
import { Estudiante } from "../model/estudiante";

export class AdmChat{

    constructor(private DAO: ApiService){}

    public unirseAChat(chat: number, user: string): Observable<boolean>{
        return this.DAO.unirseAChat(chat, user).pipe(
            map((data: any) => {
                return data.status
            }))
    }

    public crearChat(user: string): Observable<number>{
        return this.DAO.crearChat(user).pipe(
            map((data: any) => {
                return data.ID
            }))
    }

    public crearMensaje(Emisor: string, FechaHora: string, Contenido: string, ChatID: number): Observable<boolean>{
        return this.DAO.crearMensaje(Emisor, FechaHora, Contenido, ChatID).pipe(
            map((data: any) => {
                return data.status
            }))
    }

    public getChatsOfUser(id: string): Observable<Chat[]> {
        return this.DAO.getChatsOfUser(id).pipe(
            map((data: any) => {
                const json = data.chats;
                return json.map((json: any) => {
                    return new Chat(
                        json.id,
                        json.host
                    )
                });
            })
        );
    }

    public getMensajesChat(id: number): Observable<Mensaje[]> {
        return this.DAO.getMensajesChat(id).pipe(
            map((data: any) => {
                const json = data.mensajes;
                return json.map((json: any) => {
                    return new Mensaje(
                        json.id,
                        json.emisor,
                        json.fechaHora,
                        json.contenido,
                        json.chatID
                    )
                });
            })
        );
    }

    public getContactosEstudiantes(sede: string): Observable<Estudiante[]>{
        return this.DAO.getContactosestudiantes(sede).pipe(
            map((data: any) => { 
                const profesoresJson = data.estudiantes;
                return profesoresJson.map((profesorJson: any) => {
                    return new Estudiante(
                        profesorJson.id,
                        profesorJson.nombre,
                        profesorJson.apellido1,
                        profesorJson.apellido2,
                        profesorJson.correoElectronico,
                        profesorJson.celular,
                        profesorJson.sede,
                        profesorJson.contraseña,
                        ""
                    )
                });
            })
        );
    }

    public getContactosP(sede: string): Observable<Profesor[]>{
        return this.DAO.getContactosprofesores(sede).pipe(
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