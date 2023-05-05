import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '/api'
  constructor(private http: HttpClient) { }

 
  //get profesores
  getProfesores(){
    const data =  this.http.get(this.url + '/profesores');
    data.forEach(profesor => console.log(profesor));
    return data;
    }



}
