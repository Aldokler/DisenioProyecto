import { ApiService } from "./DAO/SERVICES/api.service";
import { SistemaNotificador } from "./SistemaNotificador";
import { HttpClient, HttpParams } from '@angular/common/http';

export class Subject{
    private observers: Observer[] = [];

    public constructor(private DAO: ApiService){
        const sistemaNotificador = new SistemaNotificador(this.DAO);
        this.observers.push(sistemaNotificador);
    }

    

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