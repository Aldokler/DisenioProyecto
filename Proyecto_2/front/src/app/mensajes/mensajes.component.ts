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
import { Estudiante } from '../model/estudiante';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  constructor(
    private controller: ControladorService, private router: Router
  ) { }

  public contactosProfesor: Profesor[] = []
  public contactosEstudiante: Estudiante[] = []
  public fecha = new Date();
  public chatsActivos: Chat[] = []
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public tipoDeUsuario: string = "";
  public contactosSeleccionados: Usuario[] = []
  public mensajes: Mensaje[] = []
  public contactosNoAnadidos: Usuario[] = []
  public numeros: number[] = []


  ngOnInit(): void {
    this.numeros = Array.from({ length: this.chatsActivos.length }, (_, i) => i + 1);
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

        this.chatsActivos = res;
      })
    ).subscribe()

    this.controller.getMensajesChat(this.pasarDatos.chatActual).pipe(
      tap(res => {
        this.mensajes = res;
      })
    ).subscribe()

    this.controller.getContactosP(this.pasarDatos.loginUser.getSede()).pipe(
      tap(res => {
        console.log("res")
        console.log(res)
        this.contactosProfesor = res;
      })
    ).subscribe()

    this.controller.getContactosE(this.pasarDatos.loginUser.getSede()).pipe(
      tap(res => {
        console.log("res")
        console.log(res)
        this.contactosEstudiante = res;
      })
    ).subscribe()

  }

  agregarParticipantes(contacto: Usuario) {

  }

  crearGrupo(contacto: Usuario) {
    if (this.contactosSeleccionados.includes(contacto)) {
      this.contactosSeleccionados = this.contactosSeleccionados.filter(p => p !== contacto);
    } else {
      this.contactosSeleccionados.push(contacto);
    }

  }

  crearGrupoLista() {
    console.log("crear chat")
    if (this.contactosSeleccionados.length == 1) {
      this.controller.crearChat(this.contactosSeleccionados[0].getId())
    }
    else {
      this.controller.crearChat(this.pasarDatos.loginUser.getId()).pipe(
        tap(res => {
          console.log("ssss", res)
          this.controller.subject.crearNotificador(res, "Chat")
          for (const contacto of this.contactosSeleccionados) {
            this.controller.subject.suscribirse(res, contacto.getId(), "Chat")
          }
          this.controller.crearNotificacion(res, "Chat", this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0], "invitación a chat" + "del profesor" + this.pasarDatos.loginUser.getNombre() + this.pasarDatos.loginUser.getApellido1())
            .pipe(
              tap(res2 => {
                console.log("ssss", res2)
                this.controller.subject.notificar(res, "Chat", res2)
              })
            ).subscribe()
          for (const contacto of this.contactosSeleccionados) {
            this.controller.subject.desuscribirse(res, contacto.getId(), "Chat")
          }

        })
      ).subscribe()
    }
  }

  enviarMensaje(mensajeEnviado: string) {
    this.controller.crearMensaje(this.pasarDatos.loginUser.getId(), 
    this.fecha.toISOString().split('T')[0] + ' ' + this.fecha.toTimeString().split(' ')[0], 
    mensajeEnviado, this.pasarDatos.chatMensaje.getId()).subscribe()
    this.ngOnInit()
  }

  verChat(chat: number, chatMensaje: Chat) {
    this.pasarDatos.chatMensaje = chatMensaje
    this.pasarDatos.chatActual = chat
    this.controller.getMensajesChat(chat).pipe(
      tap(res => {
        this.mensajes = res;
      })
    ).subscribe()
    this.ngOnInit()

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
