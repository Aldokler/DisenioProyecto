import { Administrativo } from "../model/administrativo";
import { TSede } from "../model/tsede";

export class AdminAdministrativos{
    public getAdministrativo(id: String): Administrativo{
        return new Administrativo('', '', '', '', '', '', TSede.CA, '', '')
    }
}