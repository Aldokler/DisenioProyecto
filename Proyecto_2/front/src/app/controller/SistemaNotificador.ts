import { Observable, map } from "rxjs";
import { ApiService } from "./DAO/SERVICES/api.service";
import { Observer } from "./Observer";
import { Chat } from "../model/chat";


export class SistemaNotificador implements Observer{
    public constructor(private DAO: ApiService){}
    
    public notificar(notificacion: number, usuario: string[]){
        console.log("sistema")
        for (const userID of usuario) {
            console.log(notificacion, userID )
            this.DAO.notificarABuzon(notificacion, userID).subscribe();
        }
        
    }

    public crearNotificacion(notificadorID :number, TipoEmisor: string, FechaHora :string, Contenido :string): Observable<number>{
        return this.DAO.crearNotificacion(notificadorID , TipoEmisor , FechaHora , Contenido).pipe(
            map((data: any) => {
                return data.ID
            })
        )
    }

    
    
}