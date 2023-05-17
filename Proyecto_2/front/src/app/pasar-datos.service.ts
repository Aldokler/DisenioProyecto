import { Injectable } from '@angular/core';
import { Usuario } from './model/usuario';
import { TRol } from './model/trol';
import { Estudiante } from './model/estudiante';
import { TSede } from './model/tsede';
import { PlanDeTrabajo } from './model/plandetrabajo';
import { EquipoGuia } from './model/equipoguia';
import { Profesor } from './model/profesor';

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
  public coordinador: Profesor = new Profesor("", "", "", "", "", "", TSede.CA, "", "", "", TRol.GUIA);
  public creador: EquipoGuia = new EquipoGuia(0, [], 0, 0, this.coordinador);
  public loginUser: Usuario = new Estudiante("", "", "", "", "", "", TSede.CA, "");
  public planesDeTrabajo: PlanDeTrabajo = new PlanDeTrabajo(0, 0, 0, [],this.creador);
  public estudiantes: Estudiante[] = []
  public actualEstudiante: Estudiante = new Estudiante("", "", "", "", "", "", TSede.CA, "")

}

