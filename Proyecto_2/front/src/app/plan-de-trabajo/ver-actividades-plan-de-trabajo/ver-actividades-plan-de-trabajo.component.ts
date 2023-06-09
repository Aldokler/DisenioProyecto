import { Component, ComponentFactory } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Actividad } from 'src/app/model/actividad';
import { Administrativo } from 'src/app/model/administrativo';
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
import swal from 'sweetalert2';

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
  
  constructor(private controller: ControladorService,private router: Router) {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
  }

  ngOnInit() {

    if (this.pasarDatos.loginUser instanceof Profesor) {
      if (this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId())) {
        console.log(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()))
        this.tipoDeUsuario = "Coordinador"
      } else {
        this.tipoDeUsuario = "Profesor"
      }

    } else if (this.pasarDatos.loginUser instanceof Administrativo){
      this.tipoDeUsuario = "Administrativo"
    }else {
      this.tipoDeUsuario = "Estudiante"
    }

    this.controller.getComentarios(this.pasarDatos.actividadPlanDeTrabajo.getId()).pipe(
      tap(res => {
        this.comentarios = res;
        this.respuestaComentarios = this.comentarios
      })
    ).subscribe()

  }

  generarComentarios(comentarioElegido:Comentario){
    this.comentarioSeleccionado = comentarioElegido
    this.controller.getReplies(comentarioElegido.getId()).pipe(
      tap(res1 => {
        this.respuestaComentarios = res1
      })
    ).subscribe()
  }

  guardarComentario(comentarioGuardar :string){
    if (!comentarioGuardar) {
      this.showErrorAlert();
      return;
    }
    let comentariocomentado:Comentario = new Comentario(0,comentarioGuardar,this.pasarDatos.loginUser.getId(),this.fecha.toISOString().split('T')[0]+' '+this.fecha.toTimeString().split(' ')[0],0,this.pasarDatos.actividadPlanDeTrabajo.getId())
    this.controller.comentarActividad(comentariocomentado).subscribe(
      () => {
        this.showSuccessAlert() ;
      }
    )
  }


  responderComentario(respuestaAComentario:string){
    let respuestaComentario:Comentario = new Comentario(0, respuestaAComentario, this.pasarDatos.loginUser.getId(), this.fecha.toISOString().split('T')[0]+' '+this.fecha.toTimeString().split(' ')[0], this.pasarDatos.actividadPlanDeTrabajo.getId(), this.comentarioSeleccionado.getId())
    console.log(respuestaComentario)
    this.controller.responderComentario(respuestaComentario).subscribe(
      () => {
        this.showSuccessAlert() ;
      }
    )
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

  showSuccessAlert() {
    swal.fire({
      icon: 'success',
      title: 'Registrado con éxito',
      timer: 2000
    });
    this.router.navigate(['/ver-actividades-plan-de-trabajo']);
  }

  showErrorAlert() {
    swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error. Por favor, inténtalo nuevamente.',
      timer: 3000
    });
  }

}
