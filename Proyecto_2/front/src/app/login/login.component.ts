import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProfesores } from '../controller/AdminProfesores';
import { ApiService } from '../controller/DAO/SERVICES/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private my: ApiService, private  adm: AdminProfesores){}

  ngOnInit(): void {}
  

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
