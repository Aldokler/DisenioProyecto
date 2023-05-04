import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-plan-de-trabajo',
  templateUrl: './home-plan-de-trabajo.component.html',
  styleUrls: ['./home-plan-de-trabajo.component.css']
})
export class HomePlanDeTrabajoComponent {
  tipoUsuario: string;
  usuario: string;

  planesDeTrabajo = [
    { id: 1, semestre: 1, anio: 2021 , tipoUsuario: 'GUIA'},
    { id: 2, semestre: 2, anio: 2021 ,tipoUsuario: 'GUIA'},
    { id: 3, semestre: 1, anio: 2022 ,tipoUsuario: 'GUIA'},
    { id: 4, semestre: 2, anio: 2022 ,tipoUsuario: 'GUIA'}
  ];

  constructor() {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
    this.tipoUsuario = 'GUIA';
    this.usuario= 'bryan'
  }
}
