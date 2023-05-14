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
import { Observable } from 'rxjs';


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
  private adminEquipoGuia = new AdminEquipoGuia(this.DAO)
  private adminEstudiante = new AdminEstudiante()
  private adminProfesores = new AdminProfesores(this.DAO)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public getEstudiante(carne:number): Observable<Estudiante>{
      return this.adminEstudiante.getEstudiante(carne)
  }
  public getEstudiantes(sede: String = ''): Observable<Estudiante[]>{
      return this.adminEstudiante.getEstudiantes(sede)
  }
  public editarEstudiante(datosEstudiante: Estudiante): boolean{
      return this.adminEstudiante.editarEstudiante(datosEstudiante)
  }
  public cargarListaEstudiantes(link: String){
      this.adminEstudiante.cargarListaEstudiantes(link)
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public addProfesor(profesor: Profesor): Observable<boolean>{
    return this.adminProfesores.addProfesor(profesor)
  }
  public getProfesor(id: String): Observable<Profesor>{
      return this.adminProfesores.getProfesor(id)
  }
  public editarDatosProfesor(profesor: Profesor): Observable<boolean>{
      return this.adminProfesores.editarDatosProfesor(profesor)
  }
  public getProfesores(): Observable<Profesor[]>{
      return this.adminProfesores.getProfesores()
  }

  public getAdministrativo(id: String): Observable<Administrativo>{
      return this.adminAdministrativos.getAdministrativo(id)
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public getEquiposGuia(): Observable<EquipoGuia[]>{
    return this.adminEquipoGuia.getEquiposGuia()
  }
  public crearEquipo(equipo: EquipoGuia): Observable<boolean>{
      return this.adminEquipoGuia.crearEquipo(equipo)
  }
  public agregarProfesor(idEG: String, idP: String): Observable<boolean>{
      return this.adminEquipoGuia.agregarProfesor(idEG, idP)
  }
  public sacarProfesor(idEG: String, idP: String): Observable<boolean>{
      return this.adminEquipoGuia.sacarProfesor(idEG, idP)
  }
  public definirCoordinador(profesor: Profesor): Observable<boolean>{
      return this.adminEquipoGuia.definirCoordinador(profesor)
  }
  public getProfesoresDeEquipoGuia(id: Number): Observable<Profesor[]>{
      return this.adminEquipoGuia.getProfesoresDeEquipoGuia(id)
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
  public consultarProximaActividad(id: String): Observable<Actividad>{
      return this.adminPlanDeTrabajo.consultarProximaActividad(id)
  }
  public verPlanDeTrabajo(id: String): Observable<PlanDeTrabajo>{
      return this.adminPlanDeTrabajo.verPlanDeTrabajo(id)
  }

  public verPlanesDeTrabajo(){
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
