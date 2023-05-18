import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Profesor } from 'src/app/model/profesor';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { TIndoleActividad } from 'src/app/model/tindoleactividad';
import { TModalidad } from 'src/app/model/tmodalidad';
import { TEstado } from 'src/app/model/testado';
import { Comentario } from 'src/app/model/comentario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '/api/'
  constructor(private http: HttpClient) { }

  public getAdministrativo(id: String){
    return this.http.get(this.url + 'administrativo/' +id)
  }

  public login(user: string, pass: string){
    return this.http.get(this.url + 'login?user=' + user + '&pass=' + pass)
  }

  public revisarCoordinador(profesorId: string){
    return this.http.get(this.url + '/coordinador/' + profesorId)
  }

  public revisarCoordinadorEquipo(profesorId: string, equipoId : string){
    return this.http.get(this.url + 'coordinadorE/' + profesorId + '/' + equipoId)
  }

  
//-------------------------------------------------------------------------------------------------------------------------------

  public addPlanDeTrabajo(año: number, semestre: number, creador: number){
    return this.http.post(this.url + 'plan_trabajo', {año, semestre, creador})
  }

  public getPlanes(){
    return this.http.get(this.url + 'plan_trabajo')
  }

  public getActividadesofPlan(id: number){
    return this.http.get(this.url + 'plan_trabajo/' + id)
  }

  public getActividad(id: number){
    return this.http.get(this.url + 'plan_trabajo/actividad/' + id)
  }

  public addActividad(nombre: string, semana: number, fechaHora: string, diasAnunciar: number, link: string, tipo: TIndoleActividad, modalidad: TModalidad, planID: number, fechaPublicar: string){
    return this.http.post(this.url + 'plan_trabajo/actividad', {nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, planID,fechaPublicar})
  }

  public modificarActividad(id: number, nombre: string, semana: number, fechaHora: string, diasAnunciar: number, link: string, tipo: TIndoleActividad, modalidad: TModalidad, estado: TEstado){
    return this.http.put(this.url + 'plan_trabajo/actividad/' + id, {nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, estado})
  }

  public addObservacion(id: number, observacion: string){
    return this.http.put(this.url + 'plan_trabajo/actividad/cancelar/' + id, observacion)
  }

  public getComentarios(id: number){
    return this.http.get(this.url + '/equipo_guia/actividad/comentarios/' + id)
  }

  public getReplies(id: number){
    return this.http.get(this.url + '/equipo_guia/actividad/comentariosR/' + id)
  }

  public addComentario(Mensaje: string, Emisor: string, FechaHora: Date,ActividadID: number){
    return this.http.post(this.url + '/equipo_guia/actividad/comentarios/' , {Mensaje, FechaHora, Emisor, ActividadID})
  }

  public addReplie(comentario: Comentario){
    return this.http.post(this.url + '/equipo_guia/actividad/comentariosR/' , {comentario})
  }

  public subirLink(id: Number, link:string){
    return this.http.post(this.url + 'equipo_guia/actividad/link/' +id, {link})
  }

  public subirAsistencia(id: Number, Foto:any){
    return this.http.post(this.url + 'equipo_guia/actividad/asistencia/' +id, {Foto})
  }


//-------------------------------------------------------------------------------------------------------------------------------

  public getEquiposGuia(){
    return this.http.get(this.url + 'equipo_guia')
  }

  public getProfesoresDeEquipoGuia(id: Number){
    return this.http.get(this.url + 'equipo_guia/' +id)
  }

  public addEquipoGuia(equipo: EquipoGuia){
    const año = equipo.getAnnio()
    const semestre = equipo.getSemestre()
    return this.http.post(this.url + 'equipo_guia', { año , semestre })
  }

  public addProfesorToEquipoGuia(idEG: Number, idP: String){
    return this.http.post(this.url + 'equipo_guia/profesor', {idEG, idP})
  }

  public defCoordinador(idEG: Number, idP: String){
    return this.http.put(this.url + 'equipo_guia/defCor', {idEG, idP})
  }

  public kickProfesor(idEG: Number, idP: String){
    return this.http.delete(this.url + 'equipo_guia/' + idEG + '?idP=' + idP)
  }

  public getEquipoGuiaByYearSemester(año: Number, semestre: Number){
    return this.http.get(this.url + 'equipo_guia_id/' + año + '/' + semestre)
  }

//-------------------------------------------------------------------------------------------------------------------------------

  public getProfesores(){
    return this.http.get(this.url + 'profesores')
  }

  public getProfesor(id: String){
    return this.http.get(this.url + 'profesores/' +id)
  }

  public addProfesor(ID: string, Nombre: string, Apellido1: string, Apellido2: string, CorreoElectronico: string , 
    Celular: string , Contraseña: string , Sede: string , TelefonoOficina: string, Rol: string, Foto:Buffer){
    console.log(Foto)
    return this.http.post(this.url + 'profesores', {ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
      Celular , Contraseña , Sede , TelefonoOficina, Rol, Foto} );
  }

  public deleteProfesor(id: String){
    return this.http.delete(this.url + 'profesores/' +id)
  }

  public modificarProfesor(profesor: Profesor){
    return this.http.put(this.url + 'profesores/'+ profesor.getId(), profesor);
  }


}
