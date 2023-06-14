import { map, tap } from "rxjs";
import { ApiService } from "./DAO/SERVICES/api.service";
import { SistemaNotificador } from "./SistemaNotificador";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observer } from "./Observer";

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
        this.getSuscriptores(notificadorID, tipoNotificador).pipe(
            tap(res => {
                for (const observer of this.observers) {
                    observer.notificar(notificacion, res);
                }
            })
          ).subscribe();

    }

    public addObserver(sistemaNotificador: SistemaNotificador){
        this.observers.push(sistemaNotificador);
    }

    public getSuscriptores(notificadorID: number,tipoNotificador: string){
        return this.DAO.getSuscriptores(notificadorID, tipoNotificador).pipe(
            map((data: any) => { 
                return data.lista;
            })
        );
    }


}