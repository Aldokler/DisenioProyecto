import { Component, ComponentFactory } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Administrativo } from 'src/app/model/administrativo';
import { Comentario } from 'src/app/model/comentario';
import { Profesor } from 'src/app/model/profesor';
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
  public respuestaComentarioSeleccionado: Comentario = new Comentario(0, "", "", this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0], 0, 0);
  public tipoDeUsuario: string = "";
  public ID: number = -1;

  constructor(private controller: ControladorService, private router: Router) {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
  }

  ngOnInit() {
    console.log(this.pasarDatos.actividadPlanDeTrabajo)
    if (this.pasarDatos.loginUser instanceof Profesor) {
      if (this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId())) {
        console.log(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()))
        this.tipoDeUsuario = "Coordinador"
      } else {
        this.tipoDeUsuario = "Profesor"
      }

    } else if (this.pasarDatos.loginUser instanceof Administrativo) {
      this.tipoDeUsuario = "Administrativo"
    } else {
      this.tipoDeUsuario = "Estudiante"
    }

    this.controller.getComentarios(this.pasarDatos.actividadPlanDeTrabajo.getId()).pipe(
      tap(res => {
        this.comentarios = res;
      })
    ).subscribe()

  }

  generarComentarios(comentarioElegido: Comentario) {
    this.pasarDatos.comentarioSeleccionado = comentarioElegido
    this.controller.getReplies(comentarioElegido.getId()).pipe(
      tap(res1 => {
        this.respuestaComentarios = res1
      })
    ).subscribe()
    this.ngOnInit()
  }

  guardarComentario(comentarioGuardar: string) {
    if (!comentarioGuardar) {
      this.showErrorAlert();
      return;
    }
    let comentariocomentado: Comentario = new Comentario(0, comentarioGuardar, this.pasarDatos.loginUser.getId(), this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0], 0, this.pasarDatos.actividadPlanDeTrabajo.getId())
    this.controller.comentarActividad(comentariocomentado).subscribe(
      () => {
        this.showSuccessAlert();
      }
    )
    this.ngOnInit()
  }


  responderComentario(respuestaAComentario: string) {
    let respuestaComentario: Comentario = new Comentario(0, respuestaAComentario,
      this.pasarDatos.loginUser.getId(),
      this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0],
      this.pasarDatos.comentarioSeleccionado.getId(),
      this.pasarDatos.actividadPlanDeTrabajo.getId())
    console.log(respuestaComentario)

    this.controller.responderComentario(respuestaComentario).subscribe(
      () => {
        this.showSuccessAlert();
      }
    )
    this.ngOnInit()
  }

  agregarObservacion(observacion: string) {
    if (!observacion) {
      this.showErrorAlert();
      return;
    }
    this.controller.agregarObservacion(this.pasarDatos.actividadPlanDeTrabajo.getId(), observacion).subscribe(
      () => {
        this.showSuccessAlert();
      }
    )
    this.ngOnInit()
  }

  guardarDeNuevoActividad() {
    this.pasarDatos.actividadPlanDeTrabajo = this.pasarDatos.actividadPlanDeTrabajo
  }
  cancelarActividad() {
    this.controller.cancelarActividad(this.pasarDatos.actividadPlanDeTrabajo.getId());
    this.controller.crearNotificacion(this.pasarDatos.actividadPlanDeTrabajo.getId(),
      "Actividad", this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0],
      "se ha cancelado la actividad" + this.pasarDatos.actividadPlanDeTrabajo.getNombre() + "del día" +
      this.pasarDatos.actividadPlanDeTrabajo.getFechaHora()).pipe(
        tap(res => {
          if (res) {
            console.log("hola")
          }
        })
      ).subscribe(
        () => {
          this.showSuccessAlert();
        }
      )
    //this.showSuccessAlert();
    //this.ngOnInit()

  }

  publicarActividad() {
    this.controller.crearNotificacion(this.pasarDatos.actividadPlanDeTrabajo.getId(), "Actividad", this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0], "se ha publicado la actividad" + this.pasarDatos.actividadPlanDeTrabajo.getNombre() + "del día" + this.pasarDatos.actividadPlanDeTrabajo.getFechaHora())
      .pipe(
        tap(res => {
          console.log("ssss", res)
          this.controller.subject.notificar(this.pasarDatos.actividadPlanDeTrabajo.getId(), "Actividad", res)

        })
      ).subscribe(
        () => {
          this.showSuccessAlert();
        }
      )



    /*
      this.controller.crearNotificacion(this.pasarDatos.actividadPlanDeTrabajo.getId() , "Actividad" , this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0] , "Se les invita a la actividad" + this.pasarDatos.actividadPlanDeTrabajo.getNombre() + "del día"+  this.pasarDatos.actividadPlanDeTrabajo.getFechaHora())
        .pipe(
        tap(res => {
          if (res) {
            console.log("hola")
          }
        })
      ).subscribe(
        () => {
          this.showSuccessAlert() ;
        }
      )*/
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
