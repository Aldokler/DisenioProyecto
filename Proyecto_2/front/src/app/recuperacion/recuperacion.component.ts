import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfesores } from '../controller/AdminProfesores';
import { ApiService } from '../controller/DAO/SERVICES/api.service';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { tap } from 'rxjs';
import { Profesor } from '../model/profesor';
import { PasarDatosService } from '../pasar-datos.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.component.html',
  styleUrls: ['./recuperacion.component.css']
})
export class RecuperacionComponent {

  private pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  correoEnviado = false;
  codigoAleatorio = ""
  codigoValidado = false;
  correoIngresado = "";
  errorMessage: string = "";

  constructor(private controller: ControladorService) { }

  ngOnInit(): void {

  }

  generarCodigoAleatorio(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';

    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }

    return codigo;
  }

  enviarCorreo(correoElectronico: string) {
    console.log(correoElectronico)
    this.correoIngresado = correoElectronico;
    const asunto = "Recuperación de constraseña"
    this.codigoAleatorio = this.generarCodigoAleatorio(8)
    const codigo = "El código de recuperación es: " + this.codigoAleatorio


    if (this.controller.verificarUsuario(correoElectronico)) {
      this.controller.notificar(correoElectronico, asunto, codigo).pipe(
        tap(res => {
          if (res) { console.log("lorem ipsum sit dolor amet") }
        })
      ).subscribe()

      this.controller.notificar(correoElectronico, asunto, codigo)
      this.correoEnviado = true; // Deshabilitar el primer formulario
    } else {
      this.errorMessage = 'Correo no se encuentra registrado'
      console.log("correo no se encuentra registrado")
      this.correoEnviado = false;
    }

  }

  validarCodigo(codigoRecuperacion: string) {
    console.log(codigoRecuperacion)
    console.log(this.codigoAleatorio)
    if (codigoRecuperacion == this.codigoAleatorio) {
      this.codigoValidado = true
    } else {
      this.codigoValidado = false
    }
  }

  guardarNuevaContrasena(nuevaContrasena: string) {
    this.controller.cambiarContraseña(this.correoIngresado, nuevaContrasena).subscribe()
  }

}
