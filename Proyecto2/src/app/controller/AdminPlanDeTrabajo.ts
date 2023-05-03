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
    public consultarProximaActividad(id: String): Actividad{
        return new Actividad(0, TIndoleActividad.TECNICO, '', new Date(), [], 0, [], TModalidad.PRESENCIAL,
         '', '', TEstado.PLANEADA, new Evidencia(0, [], ''), [], new Date(), '', new Date())
    }
    public verPlanDeTrabajo(): PlanDeTrabajo{
        return new PlanDeTrabajo(0, 0, 0, [], new EquipoGuia([], 0, 0))
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