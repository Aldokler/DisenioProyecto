import { ApiService } from "./DAO/SERVICES/api.service";
import { SistemaNotificador } from "./SistemaNotificador";

export class Subject{
    public constructor(private DAO: ApiService){
        const sistemaNotificador = new SistemaNotificador(this.DAO);
        this.observers.push(sistemaNotificador);
    }

    private observers: Observer[] = [];

    public suscribirse(subject: number, observer: string, tipo: string): void{
        this.DAO.suscribirseANotificador(observer, subject, tipo);
    }

    public desuscribirse(subject: number, observer: string, tipo: string): void{
        this.DAO.desuscribirseANotificador(observer, subject, tipo);
    }

    public notificar(notificacion: number, usuario: string[]){
        

        for (const observer of this.observers) {
            observer.notificar(notificacion, usuario);
        }
    }

    public addObserver(sistemaNotificador: SistemaNotificador){
        this.observers.push(sistemaNotificador);
    }


}