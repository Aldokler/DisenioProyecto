import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = '/api'
  constructor(private http: HttpClient) { }

  //get profesores
  getProfesores(){
    return this.http.get(this.url + '/profesores')
  }

  //get profesores
  getProfesorr(){
    return this.http.get(this.url + '/profesores')
  }
}
