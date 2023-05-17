
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
import { EquipoGuia } from 'src/app/model/equipoguia';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { PasarDatosService } from 'src/app/pasar-datos.service';

@Component({
  selector: 'app-ver-plan-de-trabajo',
  templateUrl: './ver-plan-de-trabajo.component.html',
  styleUrls: ['./ver-plan-de-trabajo.component.css']
})
export class VerPlanDeTrabajoComponent {

  public actividades: Actividad[] = [];
  public pasarDatos:PasarDatosService = PasarDatosService.getInstance()
  
  
  constructor(private controller: ControladorService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.actividades = this.pasarDatos.planesDeTrabajo.getId()
    console.log("este es el plan que se escogió");
    console.log(this.pasarDatos.planesDeTrabajo);
    
  }

  ngOnUpdate(){

  }
  

}
