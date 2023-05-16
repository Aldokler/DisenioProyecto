import { Observable } from "rxjs/internal/Observable";
import { EquipoGuia } from "../model/equipoguia";
import { Profesor } from "../model/profesor";
import { Subject, Subscription, map, tap } from "rxjs";
import { ApiService } from "./DAO/SERVICES/api.service";

export class AdminEquipoGuia {

    constructor(private DAO: ApiService) { }

    public getEquiposGuia(): Observable<EquipoGuia[]> {
        return this.DAO.getEquiposGuia().pipe(
            map((data: any) => {
                const json = data.equipos;
                return json.map((json: any) => {
                    return new EquipoGuia(
                        json.id,
                        json.miembros,
                        json.año,
                        json.semestre
                    )
                });
            })
        );
    }
    public crearEquipo(equipo: EquipoGuia) {
        this.DAO.addEquipoGuia(equipo)
        this.getEquipoGuiaByYearSemester(equipo.getAño(), equipo.getSemestre()).pipe(
            tap(res => {
                console.log(res)
                for (let profe of equipo.getMiembros()) {
                    console.log(profe.getId())
                    this.agregarProfesor(res, profe.getId()).toPromise().then( () => console.log("working?"))
                }
            })
        ).toPromise().then( () => console.log("aja?") )
    }

    public agregarProfesor(idEG: Number, idP: String): Observable<boolean> {
        return this.DAO.addProfesorToEquipoGuia(idEG, idP).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }
    public sacarProfesor(idEG: Number, idP: String): Observable<boolean> {
        return this.DAO.kickProfesor(idEG, idP).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }
    public definirCoordinador(profesor: Profesor): Observable<boolean> {
        return this.DAO.defCoordinador(profesor).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }
    public getProfesoresDeEquipoGuia(id: Number): Observable<Profesor[]> {
        return this.DAO.getProfesoresDeEquipoGuia(id).pipe(
            map((data: any) => {
                const profesoresJson = data.profesor;
                return profesoresJson.map((profesorJson: any) => {
                    return new Profesor(
                        profesorJson.id,
                        profesorJson.nombre,
                        profesorJson.apellido1,
                        profesorJson.apellido2,
                        profesorJson.correoElectronico,
                        profesorJson.celular,
                        profesorJson.sede,
                        profesorJson.contraseña,
                        profesorJson.telefonoOficina,
                        profesorJson.fotografia,
                        profesorJson.rol
                    )
                });
            })
        );
    }

    public getEquipoGuiaByYearSemester(año: Number, semestre: Number): Observable<Number> {
        return this.DAO.getEquipoGuiaByYearSemester(año, semestre).pipe(
            map((data: any) => {
                return data[0].ID
            })
        )
    }
}