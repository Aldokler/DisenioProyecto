import { Actividad } from "../model/actividad";
import { Administrativo } from "../model/administrativo";
import { Comentario } from "../model/comentario";
import { EquipoGuia } from "../model/equipoguia";
import { Estudiante } from "../model/estudiante";
import { Evidencia } from "../model/evidencia";
import { PlanDeTrabajo } from "../model/plandetrabajo";
import { Profesor } from "../model/profesor";
import { AdminActividad } from "./AdminActividad";
import { AdminAdministrativos } from "./AdminAdministrativos";
import { AdminEquipoGuia } from "./AdminEquipoGuia";
import { AdminEstudiante } from "./AdminEstudiante";
import { AdminPlanDeTrabajo } from "./AdminPlanDeTrabajo";
import { AdminProfesores } from "./AdminProfesores";

export class Controlador {

    private adminActividad = new AdminActividad()
    private adminAdministrativos = new AdminAdministrativos()
    private adminPlanDeTrabajo = new AdminPlanDeTrabajo()
    private adminEquipoGuia = new AdminEquipoGuia()
    private adminEstudiante = new AdminEstudiante()
    private adminProfesores = new AdminProfesores()

    public getEstudiante(carne:number): Estudiante{
        return this.adminEstudiante.getEstudiante(carne)
    }
    public getEstudiantes(sede: String = ''): Estudiante[]{
        return this.adminEstudiante.getEstudiantes(sede)
    }
    public editarEstudiante(datosEstudiante: Estudiante): boolean{
        return this.adminEstudiante.editarEstudiante(datosEstudiante)
    }
    public cargarListaEstudiantes(link: String){
        this.adminEstudiante.cargarListaEstudiantes(link)
    }

    public getProfesor(id: String): Profesor{
        return this.adminProfesores.getProfesor(id)
    }
    public editarDatosProfesor(id: String): boolean{
        return this.adminProfesores.editarDatosProfesor(id)
    }
    public getProfesores(): Profesor[]{
        return this.adminProfesores.getProfesores()
    }

    public getAdministrativo(id: String): Administrativo{
        return this.adminAdministrativos.getAdministrativo(id)
    }

    public crearEquipo(equipo: EquipoGuia){}
    public agregarProfesor(profesor: Profesor){}
    public sacarProfesor(id: String){}
    public definirCoordinador(id: String){}
    public verMiembrosEquipo(){}

    public crearActividad(actividad: Actividad){}
    public modificarDatosActividad(actividad: Actividad){}
    public subirEvidencia(evidencia: Evidencia){}
    public modificarEvidencia(id: number){}
    public comentarActividad(comentario: Comentario){}
    public responderComentario(comentario: Comentario){}
    public agregarObservacion(observacion: String, fecha: Date){}
    
    public crearPlanTrabajo(plan: PlanDeTrabajo){}
    public consultarProximaActividad(id: String){}
    public verPlanDeTrabajo(){}
    public marcarActividadRealizada(id: String){}
    public cancelarActividad(id: String){}
    public publicarActividad(id: String){}
    public registrarActividad(actividad: Actividad){}

    public cambiarContraseña(correo:String){}
}