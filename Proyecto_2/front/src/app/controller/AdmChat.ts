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



}