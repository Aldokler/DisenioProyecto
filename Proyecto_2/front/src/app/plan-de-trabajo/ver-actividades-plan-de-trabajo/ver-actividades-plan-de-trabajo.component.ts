import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Usuario } from 'src/app/model/usuario';
import { PasarDatosService } from 'src/app/pasar-datos.service';

@Component({
  selector: 'app-ver-actividades-plan-de-trabajo',
  templateUrl: './ver-actividades-plan-de-trabajo.component.html',
  styleUrls: ['./ver-actividades-plan-de-trabajo.component.css']
})
export class VerActividadesPlanDeTrabajoComponent {
  tipoUsuario: string;
  public pasarDatos:PasarDatosService = PasarDatosService.getInstance()

  constructor(private controller: ControladorService) {
    // aquí puedes obtener el tipo de usuario actual y establecer la variable tipoUsuario en consecuencia
    this.tipoUsuario = 'GUIA';
  }

  ngOnInit() {
    this.controller.getActividad(this.pasarDatos.actividadPlanDeTrabajo.getId()).pipe(
      tap(res => {
       //this.actividades = res;
      })
    ).subscribe()
    console.log("este es el plan que se escogió");
    console.log(this.pasarDatos.planesDeTrabajo);
    
  }
  

}
