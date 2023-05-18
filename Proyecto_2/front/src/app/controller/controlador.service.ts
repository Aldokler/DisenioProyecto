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
import { Observable, Subscription } from 'rxjs';
import { login } from './login';
import { Usuario } from '../model/usuario';
import { ComunicadorExcelService } from './DAO/comunicador-excel.service';


@Injectable({
  providedIn: 'root'
})
export class ControladorService {

  constructor(
    private DAO: ApiService
  ){}

  private adminActividad = new AdminActividad(this.DAO)
  private adminAdministrativos = new AdminAdministrativos(this.DAO)
  private adminPlanDeTrabajo = new AdminPlanDeTrabajo(this.DAO)
  private adminEquipoGuia = new AdminEquipoGuia(this.DAO)
  private adminEstudiante = new AdminEstudiante()
  private adminProfesores = new AdminProfesores(this.DAO)
  private adminLogin = new login(this.DAO)
  private excelService = new ComunicadorExcelService()

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
  public crearEquipo(equipo: EquipoGuia){
      return this.adminEquipoGuia.crearEquipo(equipo)
  }
  public agregarProfesor(idEG: Number, idP: String): Observable<boolean>{
      return this.adminEquipoGuia.agregarProfesor(idEG, idP)
  }
  public sacarProfesor(idEG: Number, idP: String): Observable<boolean>{
      return this.adminEquipoGuia.sacarProfesor(idEG, idP)
  }
  public definirCoordinador(idEG: Number, idP: String): Observable<boolean>{
      return this.adminEquipoGuia.definirCoordinador(idEG, idP)
  }
  public getProfesoresDeEquipoGuia(id: Number): Observable<Profesor[]>{
      return this.adminEquipoGuia.getProfesoresDeEquipoGuia(id)
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  public getActividad(id: number): Observable<Actividad>{
    return this.adminActividad.getActividad(id)
  }
  public crearActividad(actividad: Actividad, plan: number): Observable<boolean>{
      return this.adminActividad.crearActividad(actividad.getNombre(), actividad.getSemana(), actividad.getFechaHora(), actividad.getDiasAnunciar(), actividad.getLink(), actividad.getTipo(), actividad.getModalidad(), plan)
  }
  public modificarDatosActividad(id: number, actividad: Actividad): Observable<boolean>{
      return this.adminActividad.modificarDatosActividad(id, actividad.getNombre(), actividad.getSemana(), actividad.getFechaHora(), actividad.getDiasAnunciar(), actividad.getLink(), actividad.getTipo(), actividad.getModalidad(), actividad.getEstado())
  }
  public getComentarios(id: number): Observable<Comentario[]>{
    return this.adminActividad.getComentarios(id)
  }
  public getReplies(id: number): Observable<Comentario[]>{
    return this.adminActividad.getReplies(id)
  }
  public subirEvidencia(evidencia: Evidencia): boolean{
      return this.adminActividad.subirEvidencia(evidencia)
  }
  public modificarEvidencia(id: number): boolean{
      return this.adminActividad.modificarEvidencia(id)
  }
  public subirLink(id: Number, link:string){
    return this.adminActividad.subirLink(id, link)
    }
  public subirAsistencia(id: Number, Foto:any){
    return this.adminActividad.subirAsistencia(id, Foto)
  }

  public comentarActividad(comentario: Comentario){
      this.adminActividad.comentarActividad(comentario)
  }
  public responderComentario(comentario: Comentario){
      this.adminActividad.responderComentario(comentario)
  }
  public agregarObservacion(id: number, observacion: string){
      this.adminActividad.agregarObservacion(id, observacion)
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  public crearPlanTrabajo(año: number, semestre: number, creador: number): Observable<boolean>{
      return this.adminPlanDeTrabajo.crearPlanTrabajo(año, semestre, creador)
  }
  public consultarProximaActividad(id: String): Observable<Actividad>{
      return this.adminPlanDeTrabajo.consultarProximaActividad(id)
  }
  public verPlanDeTrabajo(id: String): Observable<PlanDeTrabajo>{
      return this.adminPlanDeTrabajo.verPlanDeTrabajo(id)
  }
  public verPlanesDeTrabajo(): Observable<PlanDeTrabajo[]>{
    return this.adminPlanDeTrabajo.verPlanesDeTrabajo()
  }
  public getActividadesofPlan(id: number): Observable<Actividad[]>{
    return this.adminPlanDeTrabajo.getActividadesofPlan(id)
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
    public ingresar(Usuario: string, Contraseña: string): Observable<Boolean>{
       
        return this.adminLogin.ingresar(Usuario, Contraseña)
    }
    public cambiarContraseña(correo:String): boolean{
        return this.adminLogin.cambiarContraseña(correo)
    }
    public solicitarCambioContraseña(correo: String): boolean{
        return this.adminLogin.solicitarCambioContraseña(correo)
    }
    public verificarCodigo(codigo: String): boolean{
        return this.adminLogin.verificarCodigo(codigo)
    }
  
  public sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public getEquipoGuiaByYearSemester(año: Number, semestre: Number): Observable<Number> {
      return this.adminEquipoGuia.getEquipoGuiaByYearSemester(año, semestre)
  }

  public async uploadStudents(file: FileReader): Promise<Estudiante[]> {
    return this.excelService.uploadStudents(file)
  }

  public async downloadStudents(datosEstudiantes: Estudiante[]): Promise<void> {
    return this.excelService.downloadStudents(datosEstudiantes)
  }
}
