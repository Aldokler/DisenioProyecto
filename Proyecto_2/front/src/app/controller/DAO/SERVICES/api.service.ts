import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Profesor } from 'src/app/model/profesor';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { TIndoleActividad } from 'src/app/model/tindoleactividad';
import { TModalidad } from 'src/app/model/tmodalidad';
import { TEstado } from 'src/app/model/testado';

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

  public addActividad(nombre: string, semana: number, fechaHora: Date, diasAnunciar: number, link: string, tipo: TIndoleActividad, modalidad: TModalidad, planID: number){
    return this.http.post(this.url + 'plan_trabajo/actividad', {nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, planID})
  }

  public modificarActividad(id: number, nombre: string, semana: number, fechaHora: Date, diasAnunciar: number, link: string, tipo: TIndoleActividad, modalidad: TModalidad, estado: TEstado){
    return this.http.put(this.url + 'plan_trabajo/actividad/' + id, {nombre, semana, fechaHora, diasAnunciar, link, tipo, modalidad, estado})
  }

  public addObservacion(id: number, observacion: string){
    return this.http.put(this.url + 'plan_trabajo/actividad/cancelar/' + id, observacion)
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

  public addProfesor(profesor: Profesor){
    return this.http.post(this.url + 'profesores', profesor );
  }

  public deleteProfesor(id: String){
    return this.http.delete(this.url + 'profesores/' +id)
  }

  public modificarProfesor(profesor: Profesor){
    return this.http.put(this.url + 'profesores/'+ profesor.getId(), profesor);
  }


}
