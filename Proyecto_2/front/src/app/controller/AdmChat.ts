import { Observable, map } from "rxjs";
import { Notificacion } from "../model/notificacion";
import { ApiService } from "./DAO/SERVICES/api.service";

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

}