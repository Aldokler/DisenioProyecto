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

    public notificar(notificadorID: number, notificacion: number){
        const suscriptores: string[] = this.DAO.getSuscriptores(notificadorID);

        for (const observer of this.observers) {
            observer.notificar(notificacion, suscriptores);
        }
    }

    public addObserver(sistemaNotificador: SistemaNotificador){
        this.observers.push(sistemaNotificador);
    }


}