import { Observable, map } from "rxjs";
import { Notificacion } from "../model/notificacion";
import { ApiService } from "./DAO/SERVICES/api.service";
import { Chat } from "../model/chat";
import { Mensaje } from "../model/mensaje";

export class AdmChat{

    constructor(private DAO: ApiService){}

    public unirseAChat(chat: number, user: string): Observable<boolean>{
        return this.DAO.unirseAChat(chat, user).pipe(
            map((data: any) => {
                return data.status
            }))
    }

    public crearChat(user: string): Observable<boolean>{
        return this.DAO.crearChat(user).pipe(
            map((data: any) => {
                return data.status
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

    public getMensajesChat(id: string): Observable<Mensaje[]> {
        return this.DAO.getMensajesChat(id).pipe(
            map((data: any) => {
                const json = data.equipos;
                return json.map((json: any) => {
                    return new Mensaje(
                        json.iD,
                        json.emisor,
                        json.fechaHora,
                        json.contenido,
                        json.chatID
                    )
                });
            })
        );
    }
 
}