import { ApiService } from "./DAO/SERVICES/api.service";

export class SistemaNotificador implements Observer{
    public constructor(private DAO: ApiService){}
    
    public notificar(notificacion: number, usuario: string[]){
        for (const userID of usuario) {
            this.DAO.notificarABuzon(notificacion, userID);
        }
        
    }
}