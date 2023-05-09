import { Observable, Subject } from "rxjs";
import { Actividad } from "../model/actividad";
import { EquipoGuia } from "../model/equipoguia";
import { Evidencia } from "../model/evidencia";
import { PlanDeTrabajo } from "../model/plandetrabajo";
import { TEstado } from "../model/testado";
import { TIndoleActividad } from "../model/tindoleactividad";
import { TModalidad } from "../model/tmodalidad";

export class AdminPlanDeTrabajo{
    public crearPlanTrabajo(plan: PlanDeTrabajo): boolean{
        return true
    }
    public consultarProximaActividad(id: String): Observable<Actividad>{
        return new Subject
    }
    public verPlanDeTrabajo(id: String): Observable<PlanDeTrabajo>{
        return new Subject
    }
    public marcarActividadRealizada(id: String): boolean{
        return true
    }
    public cancelarActividad(id: String): boolean{
        return true
    }
    public publicarActividad(id: String): boolean{
        return true
    }
    public registrarActividad(actividad: Actividad): boolean{
        return true
    }
}