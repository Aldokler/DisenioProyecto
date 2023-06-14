import { ApiService } from "./DAO/SERVICES/api.service";

export class Subject{
    public constructor(private DAO: ApiService){}

    private observers: Observer[] = [];

    public suscribirse(subject: number, observer: string, tipo: string): void{
        this.DAO.suscribirseANotificador(observer, subject, tipo);
    }

    public desuscribirse(subject: number, observer: string, tipo: string): void{
        this.DAO.desuscribirseANotificador(observer, subject, tipo);
    }

    public notificar(notificacion: number, usuario: string){
        for (const observer of this.observers) {
            observer.notificar(notificacion, usuario);
        }
    }


}