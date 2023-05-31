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
  public fecha = new Date();
  public comentarioSeleccionado:Comentario = new Comentario(0,"","",this.fecha.toISOString().split('T')[0]+' '+this.fecha.toTimeString().split(' ')[0],0,0);
  public respuestaComentarioSeleccionado:Comentario = new Comentario(0,"","",this.fecha.toISOString().split('T')[0]+' '+this.fecha.toTimeString().split(' ')[0],0,0);
  public tipoDeUsuario: string = "";
  
  constructor(private controller: ControladorService) {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
  }

  ngOnInit() {

    if(this.pasarDatos.loginUser instanceof Profesor){
      if(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()) ){
        console.log(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()))
        this.tipoDeUsuario = "Coordinador"
      }else{
        this.tipoDeUsuario = "Profesor"
      }
    }else{
      this.tipoDeUsuario ="Administrativo"
    }
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
    let comentariocomentado:Comentario = new Comentario(0,comentarioGuardar,this.pasarDatos.loginUser.getId(),this.fecha.toISOString().split('T')[0]+' '+this.fecha.toTimeString().split(' ')[0],0,this.pasarDatos.actividadPlanDeTrabajo.getId())
    console.log(comentariocomentado)
    this.controller.comentarActividad(comentariocomentado).subscribe()
  }


  responderComentario(respuestaAComentario:string){
    let respuestaComentario:Comentario = new Comentario(0,respuestaAComentario,this.pasarDatos.loginUser.getId(),this.fecha.toISOString().split('T')[0]+' '+this.fecha.toTimeString().split(' ')[0],this.comentarioSeleccionado.getId(),this.pasarDatos.actividadPlanDeTrabajo.getId())
    console.log(respuestaComentario)
    this.controller.responderComentario(respuestaComentario).subscribe()
  }

  agregarObservacion(observacion:string){
    this.controller.agregarObservacion(this.pasarDatos.actividadPlanDeTrabajo.getId(),observacion)
  }

  guardarDeNuevoActividad(){
    this.pasarDatos.actividadPlanDeTrabajo = this.pasarDatos.actividadPlanDeTrabajo
  }
  cancelarActividad(){
    this.controller.cancelarActividad(this.pasarDatos.actividadPlanDeTrabajo.getId());
  }

}
