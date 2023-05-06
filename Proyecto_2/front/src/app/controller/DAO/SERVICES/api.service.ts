import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from 'src/app/model/profesor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '/api'
  constructor(private http: HttpClient) { }

 
  public async getProfesores(){
    return await this.http.get<Profesor[]>(this.url + '/profesores').toPromise()
  }

}
