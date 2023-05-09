import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlanDeTrabajo } from 'src/app/model/plandetrabajo';

@Component({
  selector: 'app-home-plan-de-trabajo',
  templateUrl: './home-plan-de-trabajo.component.html',
  styleUrls: ['./home-plan-de-trabajo.component.css']
})
export class HomePlanDeTrabajoComponent {
  tipoUsuario: string;
  usuario: string;

  public planesDeTrabajo : PlanDeTrabajo[] = [];

  constructor() {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
    this.tipoUsuario = 'GUIA';
    this.usuario= 'bryan'
  }
}
