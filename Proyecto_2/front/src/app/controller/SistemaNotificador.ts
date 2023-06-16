import { Observable, map } from "rxjs";
import { ApiService } from "./DAO/SERVICES/api.service";
import { Observer } from "./Observer";


export class SistemaNotificador implements Observer{
    public constructor(private DAO: ApiService){}
    
    public notificar(notificacion: number, usuario: string[]){
        console.log("sistema")
        for (const userID of usuario) {
            this.DAO.notificarABuzon(notificacion, userID);
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