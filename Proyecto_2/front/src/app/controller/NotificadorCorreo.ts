import { Notificador } from "./Notificador";
import { ApiService } from "./DAO/SERVICES/api.service";
import { Observable, map } from "rxjs";

export class NotificadorCorreo extends Notificador {
    constructor(private DAO: ApiService){
        super();
    }
    
    override notificar(destinatario: string, asunto: string, contenido: string): Observable<boolean> {
        return this.DAO.enviarCorreo(destinatario, asunto, contenido).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    

    

}

