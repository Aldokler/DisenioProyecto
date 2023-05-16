import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from 'src/app/model/profesor';
import { EquipoGuia } from 'src/app/model/equipoguia';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '/api/'
  constructor(private http: HttpClient) { }

  public getEquiposGuia(){
    return this.http.get(this.url + 'equipo_guia')
  }

  public getProfesoresDeEquipoGuia(id: Number){
    return this.http.get(this.url + 'equipo_guia/' +id)
  }

  public addEquipoGuia(equipo: EquipoGuia){
    const año = equipo.getAño()
    const semestre = equipo.getSemestre()
    return this.http.post(this.url + 'equipo_guia', { año , semestre })
  }

  public addProfesorToEquipoGuia(idEG: Number, idP: String){
    return this.http.post(this.url + 'equipo_guia/profesor', {idEG, idP})
  }

  public defCoordinador(profesor: Profesor){
    return this.http.put(this.url + 'equipo_guia/' + profesor.getId(), profesor)
  }

  public kickProfesor(idEG: Number, idP: String){
    return this.http.delete(this.url + 'equipo_guia/' + idEG, {body: idP})
  }

//--------------------------------------------------------------------------

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
