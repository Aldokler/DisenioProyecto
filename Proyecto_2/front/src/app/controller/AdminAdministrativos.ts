import { Observable } from "rxjs/internal/Observable";
import { Administrativo } from "../model/administrativo";
import { TSede } from "../model/tsede";
import { Subject, map, of } from "rxjs";
import { ApiService } from "./DAO/SERVICES/api.service";

export class AdminAdministrativos{

    constructor(private DAO: ApiService){}
    
    public getAdministrativo(id: String): Observable<Administrativo>{
        return this.DAO.getAdministrativo(id).pipe(
            map((data: any) => {
                const json = data.administrativo[0];
                if (json == undefined){
                    return new Administrativo('', '', '', '', '', '', TSede.CA, '', '')
                } else {
                    return new Administrativo(
                        json.id,
                        json.nombre,
                        json.apellido1,
                        json.apellido2,
                        json.correoElectronico,
                        json.celular,
                        json.sede,
                        json.contraseña,
                        json.telefonoOficina
                    );
                }
            })
        );
    }
}