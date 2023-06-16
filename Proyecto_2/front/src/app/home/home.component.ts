import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { ControladorService } from 'src/app/controller/controlador.service';
import { PasarDatosService } from '../pasar-datos.service';
import { Profesor } from '../model/profesor';
import { Notificacion } from '../model/notificacion';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Actividad } from '../model/actividad';
import { TIndoleActividad } from '../model/tindoleactividad';
import { TModalidad } from '../model/tmodalidad';
import { TEstado } from '../model/testado';
import { Evidencia } from '../model/evidencia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  miUsuario: Usuario | null = null;
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public tipoDeUsuario: string = ""
  public estadoNotificacion: boolean = false
  public notificaciones: Notificacion[] = []
  public notificacionesleidas: Notificacion[] = []
  public notificacionesNoLeidas: Notificacion[] = []
  public evidencia: Evidencia = new Evidencia(0, [], "");
  public actividadNotificacion: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL,
    "", '', [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA,
    this.evidencia, [], '', "", '');
  public fecha = new Date();
  public boolean = false

  constructor(private controller: ControladorService, private router: Router) { }
  ngOnInit(): void {
    if (this.pasarDatos.loginUser instanceof Profesor) {
      if (this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId())) {
        this.tipoDeUsuario = "Coordinador"
      } else {
        this.tipoDeUsuario = "Profesor"
      }

    } else if (this.pasarDatos.loginUser instanceof Administrativo) {
      this.tipoDeUsuario = "Administrativo"
    } else {
      this.tipoDeUsuario = "Estudiante"
    }

    //notificaciones 
    //0-no leidas, 1-leidas, 2-todas
    this.controller.getNotificaciones(this.pasarDatos.loginUser.getId(), 2).pipe(
      tap(res2 => {
        this.notificaciones = res2;
      })
    ).subscribe()

    //notificaciones leidas
    this.controller.getNotificaciones(this.pasarDatos.loginUser.getId(), 1).pipe(
      tap(res => {
        this.notificacionesleidas = res;
      })
    ).subscribe()

    //notificaciones no leidas
    this.controller.getNotificaciones(this.pasarDatos.loginUser.getId(), 0).pipe(
      tap(res1 => {
        this.notificacionesNoLeidas = res1;

      })
    ).subscribe()
  }

  borrarNotificacion(notificacion: Notificacion) {
    if (!notificacion) {
      this.showErrorAlert();
      return;
    }
    console.log(notificacion)
    this.controller.deleteNotificacionBuzon(this.pasarDatos.loginUser.getId(), notificacion.getId()).subscribe(
      () => {
        this.showSuccessAlert();
      }
    )
  }

  borrarBuzon() {
    this.controller.vaciarBuzon(this.pasarDatos.loginUser.getId()).subscribe(
      () => {
        this.showSuccessAlert();
      }
    )
  }

  showSuccessAlert() {
    swal.fire({
      icon: 'success',
      title: 'Registrado con éxito',
      timer: 2000
    });
    this.router.navigate(['/home']);
  }

  showErrorAlert() {
    swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error. Por favor, inténtalo nuevamente.',
      timer: 3000
    });
  }

  cambiarEstadoNotificacion(notificacion: Notificacion) {

  }

  aceptarInvitacion(notificacion:Notificacion) {
    this.controller.unirseAChat(notificacion.getIdEmisor(),this.pasarDatos.loginUser.getId()).subscribe()
    this.boolean = true
    this.ngOnInit()
  }

  denegarInvitacion() {
    //this.controller.unirseAChat(,this.pasarDatos.loginUser.getId()).subscribe()
    this.controller.crearNotificacion(this.pasarDatos.actividadPlanDeTrabajo.getId(), "Chat", this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0], "se ha denegado el chat" + this.pasarDatos.actividadPlanDeTrabajo.getNombre() + "del día" + this.pasarDatos.actividadPlanDeTrabajo.getFechaHora())
      .pipe(
        tap(res => {

          this.controller.subject.notificar(this.pasarDatos.actividadPlanDeTrabajo.getId(), "Chat", res)

        })
      ).subscribe(
        () => {
          this.showSuccessAlert();
        }
      )
  }

  cambiarEstadoNotificacionOjito(notificacion: Notificacion) {
    console.log("entra aqui ")
    this.controller.setEstadoNotificacion(this.pasarDatos.loginUser.getId(), notificacion.getId()).subscribe()
    console.log(notificacion.getEstado())
    this.ngOnInit()
  }

  guardarDatoActividadNotificacion(notificacion: Notificacion) {
    console.log("pasar datos")
    console.log(notificacion.getIdEmisor())

    this.controller.getActividad(notificacion.getIdEmisor()).pipe(
      tap(res1 => {
        this.pasarDatos.actividadPlanDeTrabajo = res1;
        console.log(res1)
      })
    ).subscribe()


  }

}
