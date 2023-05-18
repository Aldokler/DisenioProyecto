import { Notificador } from "./Notificador";
import { ApiService } from "./DAO/SERVICES/api.service";

export class NotificadorCorreo extends Notificador {
    constructor(private DAO: ApiService){
        super();
    }
    
    override notificar(destinatario: string, asunto: string, contenido: string): void {
        this.DAO.enviarCorreo(destinatario, asunto, contenido);
    }

    

    

}

