import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Actividad } from 'src/app/model/actividad';
import { Administrativo } from 'src/app/model/administrativo';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { PlanDeTrabajo } from 'src/app/model/plandetrabajo';
import { Profesor } from 'src/app/model/profesor';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-plan-de-trabajo',
  templateUrl: './crear-plan-de-trabajo.component.html',
  styleUrls: ['./crear-plan-de-trabajo.component.css']
})
export class CrearPlanDeTrabajoComponent {
  constructor(
    private controller: ControladorService,private router: Router
  ) { }

  public actividades: Actividad[] = [];
  public miembros: Profesor[] = [];
  public coordinador: Profesor = new Profesor("", "", "", "", "", "", TSede.CA, "1234", "", "", TRol.GUIA);
  public creador: EquipoGuia = new EquipoGuia(0, this.miembros, 0, 0, this.coordinador);

  crearPlanDeTrabajo(fecha: string, semestre: string, annio: string, codigodeEquipo: string) {
    if (!fecha || !semestre|| !annio || !fecha || !codigodeEquipo ) {
      this.showErrorAlert();
      return;
    }
    this.controller.crearPlanTrabajo(parseInt(annio), parseInt(semestre), parseInt(codigodeEquipo)).pipe(
      tap(res => {
        if (res) {
        }
      })
    ).subscribe(() => {
      this.showSuccessAlert() ;
    })
  }

  showSuccessAlert() {
    swal.fire({
      icon: 'success',
      title: 'Registrado con éxito',
      timer: 2000
    });
    this.router.navigate(['/home-plan-de-trabajo']);
  }

  showErrorAlert() {
    swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error al crear el plan de trabajo. Por favor, inténtalo nuevamente.',
      timer: 3000
    });
  }

}
