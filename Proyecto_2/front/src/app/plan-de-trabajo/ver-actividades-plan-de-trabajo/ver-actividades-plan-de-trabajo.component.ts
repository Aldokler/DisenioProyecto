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
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public comentarios: Comentario[] = [];
  public respuestaComentarios: Comentario[] = [];
  public emisor:Profesor = new Profesor("","","","","","",TSede.CA,"","","",TRol.GUIA);
  public fecha = new Date(2023, 4, 16, 12, 30, 45);
  public comentarioSeleccionado:Comentario = new Comentario(0,"",this.emisor,this.fecha,0,0);
  public tipoDeUsuario: string = "";
  constructor(private controller: ControladorService) {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
  }

  ngOnInit() {
<<<<<<< HEAD
=======

    if(this.pasarDatos.loginUser instanceof Profesor){
      this.tipoDeUsuario = "Profesor"
    }else{
      this.tipoDeUsuario ="Administrativo"
    }
>>>>>>> 1975978cb267c114cbc03d5e00a139f13dfb2b59
    console.log(this.pasarDatos.actividadPlanDeTrabajo)
    console.log(this.pasarDatos.actividadPlanDeTrabajo.getId())
    this.controller.getComentarios(this.pasarDatos.actividadPlanDeTrabajo.getId()).pipe(
      tap(res => {
        this.comentarios = res;
        this.respuestaComentarios = this.comentarios
        console.log(this.comentarios);
      })

    ).subscribe()

  }

  generarComentarios(comentarioElegido:Comentario){
    this.comentarioSeleccionado = comentarioElegido
    console.log("Este es el comentario elegido")
    console.log(comentarioElegido)
    this.controller.getReplies(comentarioElegido.getId()).pipe(
      tap(res1 => {
        this.respuestaComentarios = res1
        console.log("aqui es la respuesta del comentario")
        console.log(this.respuestaComentarios)
      })
    ).subscribe()
  }

  guardarComentario(comentarioGuardar :string){
   // this.controller.comentarActividad(comentarioGuardar,this.pasarDatos.loginUser.getId(),)
  }


  responderComentario(respuestaAComentario:string){
    this.controller.responderComentario(this.comentarioSeleccionado)
  }

}
