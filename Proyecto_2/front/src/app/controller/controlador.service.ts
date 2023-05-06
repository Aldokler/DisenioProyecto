import { Injectable } from '@angular/core';
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
import { ApiService } from "./DAO/SERVICES/api.service";


@Injectable({
  providedIn: 'root'
})
export class ControladorService {

  constructor(
    private DAO: ApiService
  ){}

  private adminActividad = new AdminActividad()
  private adminAdministrativos = new AdminAdministrativos()
  private adminPlanDeTrabajo = new AdminPlanDeTrabajo()
  private adminEquipoGuia = new AdminEquipoGuia()
  private adminEstudiante = new AdminEstudiante()
  private adminProfesores = new AdminProfesores(this.DAO)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public getProfesor(id: String): Profesor{
      return this.adminProfesores.getProfesor(id)
  }
  public editarDatosProfesor(id: String): boolean{
      return this.adminProfesores.editarDatosProfesor(id)
  }
  public getProfesores(): Promise<Profesor[] | undefined>{
      return this.adminProfesores.getProfesores()
  }

  public getAdministrativo(id: String): Administrativo{
      return this.adminAdministrativos.getAdministrativo(id)
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public crearEquipo(equipo: EquipoGuia): boolean{
      return this.adminEquipoGuia.crearEquipo(equipo)
  }
  public agregarProfesor(profesor: Profesor){
      this.adminEquipoGuia.agregarProfesor(profesor)
  }
  public sacarProfesor(id: String): boolean{
      return this.adminEquipoGuia.sacarProfesor(id)
  }
  public definirCoordinador(id: String): boolean{
      return this.adminEquipoGuia.definirCoordinador(id)
  }
  public verMiembrosEquipo(): EquipoGuia{
      return this.adminEquipoGuia.verMiembrosEquipo()
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public crearActividad(actividad: Actividad): boolean{
      return this.adminActividad.crearActividad(actividad)
  }
  public modificarDatosActividad(actividad: Actividad): boolean{
      return this.adminActividad.modificarDatosActividad(actividad)
  }
  public subirEvidencia(evidencia: Evidencia): boolean{
      return this.adminActividad.subirEvidencia(evidencia)
  }
  public modificarEvidencia(id: number): boolean{
      return this.adminActividad.modificarEvidencia(id)
  }
  public comentarActividad(comentario: Comentario){
      this.adminActividad.comentarActividad(comentario)
  }
  public responderComentario(comentario: Comentario){
      this.adminActividad.responderComentario(comentario)
  }
  public agregarObservacion(observacion: String, fecha: Date){
      this.adminActividad.agregarObservacion(observacion, fecha)
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  public crearPlanTrabajo(plan: PlanDeTrabajo): boolean{
      return this.adminPlanDeTrabajo.crearPlanTrabajo(plan)
  }
  public consultarProximaActividad(id: String): Actividad{
      return this.adminPlanDeTrabajo.consultarProximaActividad(id)
  }
  public verPlanDeTrabajo(): PlanDeTrabajo{
      return this.adminPlanDeTrabajo.verPlanDeTrabajo()
  }
  public marcarActividadRealizada(id: String): boolean{
      return this.adminPlanDeTrabajo.marcarActividadRealizada(id)
  }
  public cancelarActividad(id: String): boolean{
      return this.adminPlanDeTrabajo.cancelarActividad(id)
  }
  public publicarActividad(id: String): boolean{
      return this.adminPlanDeTrabajo.publicarActividad(id)
  }
  public registrarActividad(actividad: Actividad): boolean{
      return this.adminPlanDeTrabajo.registrarActividad(actividad)
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //?
  public cambiarContraseña(correo:String){}
}
