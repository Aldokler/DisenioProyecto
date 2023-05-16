import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfesores } from '../controller/AdminProfesores';
import { ApiService } from '../controller/DAO/SERVICES/api.service';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { PasarDatosService } from '../pasar-datos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  mostrarHomeComponent = false;
  errorMessage: string = "";

  constructor(private router: Router, private my: ApiService, private  adm: AdminProfesores,private controller: ControladorService, private pasarDatos:PasarDatosService){}


  ngOnInit(): void {

  }

  evaluarUsuario(correoUsuario: string, contrasenaInput: string) {
    if (!correoUsuario || !contrasenaInput) {
      this.errorMessage = 'Por favor, complete todos los campos';
      return;
    }

    this.pasarDatos.loginUser = this.controller.ingresar(correoUsuario, contrasenaInput);
    if (usuario) {
      this.mostrarHomeComponent = true;
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }

  inputContrasena!: HTMLInputElement;
  verContrasenaIcono = 'bi-eye';

  ngAfterViewInit() {
    this.inputContrasena = document.querySelector('[type="password"]') as HTMLInputElement;
  }

  verContrasena(): void {
    if (this.inputContrasena && this.inputContrasena.type === 'password') {
      this.inputContrasena.type = 'text';
      this.verContrasenaIcono = 'bi-eye-slash';
    } else if (this.inputContrasena) {
      this.inputContrasena.type = 'password';
      this.verContrasenaIcono = 'bi-eye';
    }
  }
  
  
}
