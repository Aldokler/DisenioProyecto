import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){}

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
