import { Injectable } from '@angular/core';
import { Usuario } from './model/usuario';
import { TRol } from './model/trol';
import { Estudiante } from './model/estudiante';
import { TSede } from './model/tsede';

@Injectable({
  providedIn: 'root'
})
export class PasarDatosService {
  private static instance: PasarDatosService;
  
  private constructor() { }

  public static getInstance(): PasarDatosService {
    if (!PasarDatosService.instance) {
      PasarDatosService.instance = new PasarDatosService();
    }

    return PasarDatosService.instance;
  }

  public loginUser: Usuario = new Estudiante("","","","","","",TSede.CA,"");

}

