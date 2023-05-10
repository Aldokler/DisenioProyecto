import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Router } from '@angular/router';
import { PlanDeTrabajo } from 'src/app/model/plandetrabajo';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-home-plan-de-trabajo',
  templateUrl: './home-plan-de-trabajo.component.html',
  styleUrls: ['./home-plan-de-trabajo.component.css']
})
export class HomePlanDeTrabajoComponent {

  constructor(
    private controller: ControladorService
  ) {}
  public planes : PlanDeTrabajo[] = [];

  ngOnInit(): void {
    
  }

}
