import { Component, ComponentFactory } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Actividad } from 'src/app/model/actividad';
import { Comentario } from 'src/app/model/comentario';
import { Evidencia } from 'src/app/model/evidencia';
import { Profesor } from 'src/app/model/profesor';
import { TEstado } from 'src/app/model/testado';
import { TIndoleActividad } from 'src/app/model/tindoleactividad';
import { TModalidad } from 'src/app/model/tmodalidad';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { Usuario } from 'src/app/model/usuario';
import { PasarDatosService } from 'src/app/pasar-datos.service';

@Component({
  selector: 'app-ver-actividades-plan-de-trabajo',
  templateUrl: './ver-actividades-plan-de-trabajo.component.html',
  styleUrls: ['./ver-actividades-plan-de-trabajo.component.css']
})
export class VerActividadesPlanDeTrabajoComponent {
  tipoUsuario: string;
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()

  public fecha = new Date(2023, 4, 16, 12, 30, 45);
  public fechacancelacion = new Date(2023, 4, 16, 12, 30, 45);
  public fechapublicar = new Date(2023, 4, 16, 12, 30, 45);
  public evidencia: Evidencia = new Evidencia(0, [], "");
  public actividadPlanDeTrabajo: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL,
    "", this.fecha, [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA,
    this.evidencia, [], this.fechacancelacion, "", this.fechapublicar);
  public emisor: Profesor = new Profesor("", "", "", "", "", "", TSede.CA, "1234", "", "", TRol.GUIA);
  public comentario: Comentario = new Comentario(0, "", this.emisor, this.fecha, 0, 0);
  public comentarios: Comentario[] = [];

  constructor(private controller: ControladorService) {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
    this.tipoUsuario = 'GUIA';
  }

  ngOnInit() {
    this.controller.getComentarios(this.pasarDatos.actividadPlanDeTrabajo.getId()).pipe(
      tap(res => {
        this.comentarios = res;
        console.log(this.comentarios);
        //this.actividades = res;
      })

    ).subscribe()


  }


}
