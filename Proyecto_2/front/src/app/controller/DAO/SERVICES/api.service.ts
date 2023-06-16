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

  public getLastActividadID(){
    return this.http.get(this.url + 'last_actividad')
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

  public getActividadesofPlanEstado(id: number, estado: String){
    return this.http.get(this.url + 'plan_trabajo/' + id + "/" + estado)
  }

  public getActividad(id: number){
    return this.http.get(this.url + 'plan_trabajo/actividad/' + id)
  }

  public getNextActividad(id: number, fecha: string){
    return this.http.get(this.url + 'plan_trabajo_next/' + id + "/" + fecha)
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

  public addComentario(Mensaje: string, Emisor: string, FechaHora: string,ActividadID: number){
    return this.http.post(this.url + '/equipo_guia/actividad/comentarios/' , {Mensaje, Emisor, FechaHora, ActividadID})
  }

  public addReplie(Mensaje: string, Emisor: string, FechaHora: string,ActividadID: number, ComentarioOrigninal:number){
    return this.http.post(this.url + '/equipo_guia/actividad/comentariosR/' , {Mensaje, FechaHora, Emisor, ActividadID, ComentarioOrigninal})
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

  public modificarProfesor(ID: string, Nombre: string, Apellido1: string, Apellido2: string, CorreoElectronico: string , 
    Celular: string , Contraseña: string , Sede: string , TelefonoOficina: string, Rol: string, Foto:Buffer){
    
    return this.http.put(this.url + 'profesores/'+ ID, {Nombre, Apellido1, Apellido2, CorreoElectronico , 
      Celular , Contraseña , Sede , TelefonoOficina, Foto, Rol});
  }

//-------------------------------------------------------------------------------------------------------------------------------

  public enviarCorreo( destinatario: string, asunto: string, contenido: string) {
    console.log("api" + destinatario)
    return this.http.post(this.url + 'enviar-correo', { destinatario, asunto, contenido });
  }

  public verificarCorreo(correo: String){
    return this.http.get(this.url + 'recuperacion/' + correo)
  }

  public cambiarContraseña(correo: String, password: string){
    return this.http.put(this.url + 'usuario?correo=' + correo + '&password=' + password, {})
  }

//-------------------------------------------------------------------------------------------------------------------------------

  public addEstudiante(ID: string, Nombre: string, Apellido1: string, Apellido2: string, CorreoElectronico: string , 
    Celular: string , Contraseña: string , Sede: string){
    return this.http.post(this.url + 'estudiantes', {ID, Nombre, Apellido1, Apellido2, CorreoElectronico , 
      Celular , Contraseña , Sede} );
  }

  public getEstudiantes(Sort: number){
    return this.http.get(this.url + 'estudiantes/' + Sort)
  }

  public getEstudiantesPorSede(id: string){
    return this.http.get(this.url + 'estudiantesPorSede/' + id)
  }
  public getEstudiante(carne: String){
    return this.http.get(this.url + 'estudiante/' +carne)
  }

  public getEstudianteByCorreo(correo: String){
    return this.http.get(this.url + 'estudiantec/' + correo)
  }

  public modificarEstudiante(ID: string, celular: string, Foto:Buffer){
    return this.http.put(this.url + 'estudiante/'+ ID, {celular, Foto});
  }

  public modificarEstudiantePlus(ID: string, Nombre: string, Apellido1: string, Apellido2: string, CorreoElectronico: string , 
    Celular: string , Contraseña: string , Sede: string, Foto:Buffer){
    return this.http.put(this.url + 'estudianteplus/'+ ID, {Nombre, Apellido1, Apellido2, CorreoElectronico , 
      Celular , Contraseña , Sede, Foto});
  }

  /////////////////////

  public suscribirseANotificador(UserId: string, NotificadorID: number, Tipo: string){
    return this.http.post(this.url + 'suscribir', {UserId, NotificadorID, Tipo} );
  }

  public desuscribirseANotificador(UserId: string, NotificadorID: number, Tipo: string){
    return this.http.delete(this.url + 'cancelarSubscripcion?UserId=' + UserId + '&NotificadorID=' + NotificadorID + '&Tipo=' + Tipo);
  }

  public notificarABuzon(NotificadorID: number, UserId: string){
    return this.http.post(this.url + 'Notificar', {NotificadorID, UserId} );
  }

  public getSuscriptores(notificadorID: number, notificadorTipo: string){
    return this.http.get(this.url + 'usuariosANotificar/' + notificadorID + '/'+ notificadorTipo)
  }

  public addNotificador(ID: number, Tipo: string){
    return this.http.post(this.url + 'notificador', {ID, Tipo});
  }

  public crearNotificacion(IDEmisor :number, TipoEmisor: string, FechaHora :string, Contenido :string){
    console.log("api")
    console.log(IDEmisor)
    return this.http.post(this.url + 'notificacion', {IDEmisor, TipoEmisor, FechaHora, Contenido});
  }

  public getBuzon(ID: string, filtro: number){
    return this.http.get(this.url + 'buzon/' + ID + '/' + filtro);
  }
  public vaciarBuzon(id: String){
    return this.http.delete(this.url + 'buzon/' + id)
  }
  public deleteNotificacionBuzon(id: String, notificacion: number){
    return this.http.delete(this.url + 'buzon/' + id + '/' + notificacion)
  }

  public setEstadoNotificacion(id: String, noti: number){
    console.log("api")
    return this.http.put(this.url + 'buzone/' + id , {noti})
  }
}
