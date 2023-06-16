import { Observable, map, tap } from "rxjs";
import { ApiService } from "./DAO/SERVICES/api.service";
import { SistemaNotificador } from "./SistemaNotificador";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observer } from "./Observer";

export class Subject {
    private observers: Observer[] = [];

    public constructor(private DAO: ApiService) {
        const sistemaNotificador = new SistemaNotificador(this.DAO);
        this.observers.push(sistemaNotificador);
    }



    public suscribirse(notificador: number, observer: string, tipo: string): Observable<boolean> {
        return this.DAO.suscribirseANotificador(observer, notificador, tipo).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public desuscribirse(notificador: number, observer: string, tipo: string): Observable<boolean> {
        return this.DAO.desuscribirseANotificador(observer, notificador, tipo).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public notificar(notificadorID: number, tipoNotificador: string, notificacion: number) {
        this.getSuscriptores(notificadorID, tipoNotificador).pipe(
            tap(res => {
                console.log(res)
                for (const observer of this.observers) {
                    observer.notificar(notificacion, res);
                    console.log(observer)
                }
            })
        ).subscribe();
    }

    public addObserver(sistemaNotificador: SistemaNotificador) {
        this.observers.push(sistemaNotificador);
    }

    public getSuscriptores(notificadorID: number, tipoNotificador: string) {
        return this.DAO.getSuscriptores(notificadorID, tipoNotificador).pipe(
            map((data: any) => {
                return data.lista;
            })
        );
    }

    public crearNotificador(ID: number, Tipo: string): Observable<boolean> {
        return this.DAO.addNotificador(ID, Tipo).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }


}