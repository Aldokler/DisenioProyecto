import { ApiService } from "./DAO/SERVICES/api.service";
import { SistemaNotificador } from "./SistemaNotificador";

export class Subject{
    public constructor(private DAO: ApiService){
        const sistemaNotificador = new SistemaNotificador(this.DAO);
        this.observers.push(sistemaNotificador);
    }

    private observers: Observer[] = [];

    public suscribirse(notificador: number, observer: string, tipo: string): void{
        this.DAO.suscribirseANotificador(observer, notificador, tipo);
    }

    public desuscribirse(notificador: number, observer: string, tipo: string): void{
        this.DAO.desuscribirseANotificador(observer, notificador, tipo);
    }

    public notificar(notificadorID: number,tipoNotificador: string, notificacion: number){
        const suscriptores: string[] = this.DAO.getSuscriptores(notificadorID, tipoNotificador);

        for (const observer of this.observers) {
            observer.notificar(notificacion, suscriptores);
        }
    }

    public addObserver(sistemaNotificador: SistemaNotificador){
        this.observers.push(sistemaNotificador);
    }


}