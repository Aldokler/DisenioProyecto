import { Observable, Subject, map } from "rxjs";
import { Actividad } from "../model/actividad";
import { EquipoGuia } from "../model/equipoguia";
import { Evidencia } from "../model/evidencia";
import { PlanDeTrabajo } from "../model/plandetrabajo";
import { TEstado } from "../model/testado";
import { TIndoleActividad } from "../model/tindoleactividad";
import { TModalidad } from "../model/tmodalidad";
import { ApiService } from "./DAO/SERVICES/api.service";

export class AdminPlanDeTrabajo{

    constructor(private DAO: ApiService){}
    
    public crearPlanTrabajo(año: number, semestre: number, creador: number): Observable<boolean>{
        return this.DAO.addPlanDeTrabajo(año, semestre, creador).pipe(
            map((data: any) => {
                return data.status == '0'
            })
        )
    }

    public verPlanesDeTrabajo(): Observable<PlanDeTrabajo[]>{
        return this.DAO.getPlanes().pipe(
            map((data: any) => {
                console.log(data.planes)
                const json = data.planes;
                return json.map((json: any) => {
                    return new PlanDeTrabajo(
                        json.id,
                        json.annio,
                        json.semestre,
                        [],
                        json.creador
                    )
                });
            })
        )
    }

    public getActividadesofPlan(id: number): Observable<Actividad[]>{
        return this.DAO.getActividadesofPlan(id).pipe(
            map((data: any) => {
                console.log(data.actividades)
                const json = data.actividades;
                return json.map((json: any) => {
                    return new Actividad(
                        json.id,
                        json.semana,
                        json.tipo,
                        json.nombre,
                        json.fechaHora,
                        [],
                        json.diasAnunciar,
                        [],
                        json.modalidad,
                        json.link,
                        json.afiche,
                        json.estado,
                        json.evidencia,
                        [],
                        json.fechaCancelacion,
                        json.observacion,
                        json.fechaAPublicar
                    )
                });
            })
        )
    }

//---------------------------------------------------------------------------------------------------------------------------

    public consultarProximaActividad(id: String): Observable<Actividad>{
        return new Subject
    }
    public verPlanDeTrabajo(id: String): Observable<PlanDeTrabajo>{
        return new Subject
    }
    public marcarActividadRealizada(id: String): boolean{
        return true
    }
    public cancelarActividad(id: number): boolean{
        return true
    }
    public publicarActividad(id: String): boolean{
        return true
    }
    public registrarActividad(actividad: Actividad): boolean{
        return true
    }
}