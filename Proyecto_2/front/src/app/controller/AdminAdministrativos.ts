import { Observable } from "rxjs/internal/Observable";
import { Administrativo } from "../model/administrativo";
import { TSede } from "../model/tsede";
import { Subject, of } from "rxjs";

export class AdminAdministrativos{
    public getAdministrativo(id: String): Observable<Administrativo>{
        return new Subject<Administrativo>
    }
}