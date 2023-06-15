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

    this.controller.getNotificaciones(this.pasarDatos.loginUser.getId()).pipe(
      tap(res => {
        this.notificaciones = res;
      })
    ).subscribe()
/*
    this.controller.getNotificacionesLeidas(this.pasarDatos.loginUser.getId()).pipe(
      tap(res => {
        this.notificacionesleidas = res;
      })
    ).subscribe()

    this.controller.notificacionesgetNotificacionesNoLeidas(this.pasarDatos.loginUser.getId()).pipe(
      tap(res => {
        this.notificacionesNoLeidas = res;
      })
    ).subscribe()*/

  }
/*
  borrarNotificacion(notificacion: Notificacion) {
    if (!notificacion) {
      this.showErrorAlert();
      return;
    }
    this.controller.notificaciones.eliminarNotificacion(notificacion.getId()).subscribe(
      () => {
        this.showSuccessAlert();
      }
    )

  }*/

  showSuccessAlert() {
    swal.fire({
      icon: 'success',
      title: 'Registrado con éxito',
      timer: 2000
    });
    //this.router.navigate(['/ver-actividades-plan-de-trabajo']);
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
