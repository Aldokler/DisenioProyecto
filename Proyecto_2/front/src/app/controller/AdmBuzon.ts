import { Observable, map } from "rxjs";
import { Notificacion } from "../model/notificacion";
import { ApiService } from "./DAO/SERVICES/api.service";

export class AdmBuzon{

    constructor(private DAO: ApiService){}

    public getNotificaciones(id: string): Observable<Notificacion[]>{
        return this.DAO.getBuzon(id).pipe(
            map((data: any) => {
                console.log(data.actividades)
                const json = data.actividades;
                return json.map((json: any) => {
                    return new Notificacion(
                        json.id,
                        json.fechaHora,
                        json.contenido,
                        json.idEmisor,
                        json.emisorTipo,
                        json.emisor,
                    )
                });
            })
        )
    }
}