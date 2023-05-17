
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlanDeTrabajo } from 'src/app/model/plandetrabajo';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Actividad } from 'src/app/model/actividad';

@Component({
  selector: 'app-ver-plan-de-trabajo',
  templateUrl: './ver-plan-de-trabajo.component.html',
  styleUrls: ['./ver-plan-de-trabajo.component.css']
})
export class VerPlanDeTrabajoComponent {

  

}
