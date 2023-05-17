import { Injectable } from '@angular/core';
import { Usuario } from './model/usuario';
import { TRol } from './model/trol';
import { Estudiante } from './model/estudiante';
import { TSede } from './model/tsede';
import { PlanDeTrabajo } from './model/plandetrabajo';
import { EquipoGuia } from './model/equipoguia';
import { Profesor } from './model/profesor';
import { ActivatedRoute } from '@angular/router';
import { Actividad } from './model/actividad';
import { TIndoleActividad } from './model/tindoleactividad';
import { TModalidad } from './model/tmodalidad';
import { TEstado } from './model/testado';
import { Evidencia } from './model/evidencia';

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
  public planesDeTrabajo: PlanDeTrabajo = new PlanDeTrabajo(0, 0, 0, [], this.creador);
  public fecha = new Date(2023, 4, 16, 12, 30, 45);
  public fechacancelacion = new Date(2023, 4, 16, 12, 30, 45);
  public fechapublicar = new Date(2023, 4, 16, 12, 30, 45);
  public evidencia: Evidencia = new Evidencia(0, [], "");
  public actividadPlanDeTrabajo: Actividad = new Actividad(0,0, TIndoleActividad.MOTIVACIONAL,
     "", this.fecha, [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA, 
     this.evidencia,[], this.fechacancelacion, "", this.fechapublicar);

  public estudiantes: Estudiante[] = []
  public actualEstudiante: Estudiante = new Estudiante("", "", "", "", "", "", TSede.CA, "")

}

