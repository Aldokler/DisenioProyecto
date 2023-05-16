import { Component, OnInit } from '@angular/core';
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


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  mostrarHomeComponent = false;
  errorMessage: string = "";

  constructor(private router: Router, private my: ApiService, private  adm: AdminProfesores,private controller: ControladorService){}


  ngOnInit(): void {

  }

  evaluarUsuario(correoUsuario: string, contrasenaInput: string) {
    if (!correoUsuario || !contrasenaInput) {
      this.errorMessage = 'Por favor, complete todos los campos';
      return;
    }

    this.controller.ingresar(correoUsuario, contrasenaInput).pipe(
      tap(async res => {
        if (res){
          let Admin: Usuario | null = null;
          let Profe: Usuario | null = null;
          await this.controller.getAdministrativo(correoUsuario).toPromise().then(
            admin => {
              Admin = admin as Administrativo
              if (Admin.getId() == ''){
                Admin = null
              }
          }).catch()
          await this.controller.getProfesor(correoUsuario).toPromise().then(
            profe => {
              Profe = profe as Profesor
              if (Profe.getId() == ''){
                Profe = null
              }
          }).catch()
          if (Profe) {
            console.log(Profe)
          } else if (Admin){
            console.log(Admin)
          } else {
            console.log("Unexpected error ocurred, deleting Win32...")
          }
        } else {
          this.errorMessage = 'Credenciales incorrectas'
        }
      })
    ).subscribe()

    /*const usuario: Usuario = this.controller.ingresar(correoUsuario, contrasenaInput);
    if (usuario) {
      this.mostrarHomeComponent = true;
    } else {
      ;
    }*/
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
