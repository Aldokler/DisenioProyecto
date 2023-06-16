import { Component, OnInit, Input } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Router } from '@angular/router';
import { PlanDeTrabajo } from 'src/app/model/plandetrabajo';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { PasarDatosService } from 'src/app/pasar-datos.service';
import { Chat } from '../model/chat';
import swal from 'sweetalert2';
import { Mensaje } from '../model/mensaje';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  constructor(
    private controller: ControladorService, private router: Router
  ) { }

  public contactos: Usuario[] = []
  public chatsActivos: Chat[] = []
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public tipoDeUsuario: string = "";
  public contactosSeleccionados:Usuario[] = []
  public mensajes:Mensaje[] = []
  public contactosNoAnadidos: Usuario[] = []


  ngOnInit(): void {
    if (this.pasarDatos.loginUser instanceof Profesor) {
      if (this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId())) {
        console.log(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()))
        this.tipoDeUsuario = "Coordinador"
      } else {
        this.tipoDeUsuario = "Profesor"
      }

    } else {
      this.tipoDeUsuario = "Administrativo"
    }

    this.controller.getChatsOfUser(this.pasarDatos.loginUser.getId()).pipe(
      tap(res => {
        console.log("res")
        console.log(res)
        this.chatsActivos = res;
      })
    ).subscribe()

  }

  agregarParticipantes(contacto:Usuario) {

  }

  crearMensajeGrupal(){

  }

  enviarMensaje(mensajeEnviado:string){

  }

  verChat(chat:number){

  }

  showSuccessAlert() {
    swal.fire({
      icon: 'success',
      title: 'Registrado con éxito',
      timer: 2000
    });
    this.router.navigate(['/home-plan-de-trabajo']);
  }

  showErrorAlert() {
    swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error al crear el plan de trabajo. Por favor, inténtalo nuevamente.',
      timer: 3000
    });
  }

}
