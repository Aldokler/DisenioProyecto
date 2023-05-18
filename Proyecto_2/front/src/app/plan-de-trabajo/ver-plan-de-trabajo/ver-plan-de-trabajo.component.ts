
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
import { TModalidad } from 'src/app/model/tmodalidad';
import { TEstado } from 'src/app/model/testado';
import { TIndoleActividad } from 'src/app/model/tindoleactividad';
import { Evidencia } from 'src/app/model/evidencia';

@Component({
  selector: 'app-ver-plan-de-trabajo',
  templateUrl: './ver-plan-de-trabajo.component.html',
  styleUrls: ['./ver-plan-de-trabajo.component.css']
})
export class VerPlanDeTrabajoComponent {

  public actividades: Actividad[] = [];
  public pasarDatos:PasarDatosService = PasarDatosService.getInstance()
  public actividadSeleccionada: Actividad[] = []
  public tipoDeUsuario: string = "";

  
  constructor(private controller: ControladorService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if(this.pasarDatos.loginUser instanceof Profesor){
      this.tipoDeUsuario = "Profesor"
    }else{
      this.tipoDeUsuario ="Administrativo"
    }
    this.controller.getActividadesofPlan(this.pasarDatos.planesDeTrabajo.getId()).pipe(
      tap(res => {
       this.actividades = res;
      })
    ).subscribe()
    console.log("este es el plan que se escogió");
    console.log(this.pasarDatos.planesDeTrabajo);
    
  }


  guardarActividad(actividad: Actividad) {
    this.pasarDatos.actividadPlanDeTrabajo = actividad;
  }


  

}
