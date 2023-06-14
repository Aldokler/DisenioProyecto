import { ApiService } from "./DAO/SERVICES/api.service";
import { SistemaNotificador } from "./SistemaNotificador";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observer } from "./Observer";
import { Observable, map } from "rxjs";

export class Subject{
    private observers: Observer[] = [];

    public constructor(private DAO: ApiService){
        const sistemaNotificador = new SistemaNotificador(this.DAO);
        this.observers.push(sistemaNotificador);
    }

    

    public suscribirse(notificador: number, observer: string, tipo: string): Observable<boolean>{
        return this.DAO.suscribirseANotificador(observer, notificador, tipo).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public desuscribirse(notificador: number, observer: string, tipo: string):Observable<boolean>{
        return this.DAO.desuscribirseANotificador(observer, notificador, tipo).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public notificar(notificadorID: number,tipoNotificador: string, notificacion: number){
        //const suscriptores: string[] = this.DAO.getSuscriptores(notificadorID, tipoNotificador);

        const suscriptores: string[] = []
        for (const observer of this.observers) {
            observer.notificar(notificacion, suscriptores);
        }
    }

    public addObserver(sistemaNotificador: SistemaNotificador){
        this.observers.push(sistemaNotificador);
    }


}