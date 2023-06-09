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
import { PasarDatosService } from '../pasar-datos.service';
import { Estudiante } from '../model/estudiante';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarHomeComponent = false;
  errorMessage: string = "";
  private pasarDatos: PasarDatosService = PasarDatosService.getInstance()

  constructor(private router: Router, private my: ApiService, private adm: AdminProfesores, private controller: ControladorService) { }


  ngOnInit(): void {

  }

  evaluarUsuario(correoUsuario: string, contrasenaInput: string) {
    if (!correoUsuario || !contrasenaInput) {
      this.errorMessage = 'Por favor, complete todos los campos';
      return;
    }

    this.controller.ingresar(correoUsuario, contrasenaInput).pipe(
      tap(async res => {
        if (res) {
          let Admin: Usuario | null = null;
          let Profe: Usuario | null = null;
          let Estudiante: Usuario | null = null;
          await this.controller.getAdministrativo(correoUsuario).toPromise().then(
            admin => {
              Admin = admin as Administrativo
              if (Admin.getId() == '') {
                Admin = null
              }
            }).catch()

          await this.controller.getProfesor(correoUsuario).toPromise().then(
            profe => {
              console.log(profe)
              Profe = profe as Profesor
              if (Profe.getId() == '') {
                Profe = null
              }
            }).catch()

          await this.controller.getEstudianteByCorreo(correoUsuario).toPromise().then(
            estudiante => {
              console.log(estudiante)
              Estudiante = estudiante as Estudiante
              if (Estudiante.getId() == '') {
                Estudiante = null
              }
            }).catch()

          console.log(Profe)
          console.log(Admin)
          console.log(Estudiante)

          if (Profe) {
            console.log(Profe)
            this.pasarDatos.loginUser = Profe
            //--------------------------------------------------------------------------------------------------------------
            this.mostrarHomeComponent = true;
            this.router.navigate(['/home']);
          } else if (Admin) {
            console.log(Admin)
            this.pasarDatos.loginUser = Admin
            //--------------------------------------------------------------------------------------------------------------
            this.mostrarHomeComponent = true;
            this.router.navigate(['/home']);
          } else if (Estudiante) {
            console.log(Estudiante)
            this.pasarDatos.loginUser = Estudiante
            //--------------------------------------------------------------------------------------------------------------
            this.mostrarHomeComponent = true;
            this.router.navigate(['/home']);
          } else {
            console.log("Unexpected error ocurred, deleting Win32...")
          }
        } else {
          this.errorMessage = 'Credenciales incorrectas'
        }
      })
    ).subscribe()
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
