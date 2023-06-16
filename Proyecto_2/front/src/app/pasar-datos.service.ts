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
import { Comentario } from './model/comentario';
import { Notificacion } from './model/notificacion';
import { Chat } from './model/chat';

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
  public loginUser: Usuario = new Estudiante("", "", "", "", "", "", TSede.CA, "", "");
  public planesDeTrabajo: PlanDeTrabajo = new PlanDeTrabajo(0, 0, 0, [], this.creador);
  public fecha = new Date(2023, 4, 16, 12, 30, 45);
  public fechacancelacion = new Date(2023, 4, 16, 12, 30, 45);
  public fechapublicar = new Date(2023, 4, 16, 12, 30, 45);
  public evidencia: Evidencia = new Evidencia(0, [], "");
  public actividadPlanDeTrabajo: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL,
    "", '', [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA,
    this.evidencia, [], '', "", '');
  public estudiantes: Estudiante[] = []
  public actualEstudiante: Estudiante = new Estudiante("", "", "", "", "", "", TSede.CA, "", "")
  public guardarProfesor: Profesor = new Profesor("", "", "", "", "", "", TSede.CA, "", "", "", TRol.GUIA);
  public comentarioSeleccionado: Comentario = new Comentario(0, "", "", this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0], 0, 0);
  public guardarEstudiante: Estudiante = new Estudiante("", "", "", "", "", "", TSede.CA, "", "");
  public guardarActividadNotificacion: number = 0
  public chatMensaje:Chat = new Chat(0,"")
  public chatActual:number = 0
  
}

