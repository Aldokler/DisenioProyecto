import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Router } from '@angular/router';
import { PlanDeTrabajo } from 'src/app/model/plandetrabajo';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';

@Component({
  selector: 'app-home-plan-de-trabajo',
  templateUrl: './home-plan-de-trabajo.component.html',
  styleUrls: ['./home-plan-de-trabajo.component.css']
})
export class HomePlanDeTrabajoComponent {

  constructor(
    private controller: ControladorService
  ) { }

  public planes: PlanDeTrabajo[] = [];
  public annios: Number[] = [];
  listaPlanDeTrabajo: PlanDeTrabajo[] = [];
  public errorMessage: String = '';
  public showError: boolean = false;

  ngOnInit(): void {
    this.controller.verPlanesDeTrabajo().pipe(
      tap(res => {
        this.planes = res;
        this.annios = this.planes.map(value => {
          return value.getAnnio()
        }).filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
        let actual = this.planes[0].getId();
        this.controller.verPlanDeTrabajo("").pipe(
          tap(res1 => {
            //this.listaPlanDeTrabajo = res1;
          }
          )
        ).subscribe()
      })
    ).subscribe()
  }

  // Función para filtrar los equipos guía según el año y semestre seleccionados
public filterPlanes(annioFiltrar: string, semestre: string) {
  const annioFiltrarNumber = parseInt(annioFiltrar);
  const semestreFiltrarNumber = parseInt(semestre);
  this.planes = this.planes.filter((plan) => {
    return plan.getAnnio() == annioFiltrarNumber && plan.getSemestre() == semestreFiltrarNumber;
  });
  if (this.planes.length == 1) {
    let actual = this.planes[0].getId();
    this.controller.verPlanesDeTrabajo().pipe(
      tap(res1 => {
        this.listaPlanDeTrabajo = res1;
      }
      )
    ).subscribe()
    this.errorMessage = ''
  } else {
    this.errorMessage = 'No existen planes de trabajo para el periodo indicado'
    this.showError = true;

    setTimeout(() => {
      this.showError = false;
      setTimeout(() => {
        this.errorMessage = '';
      }, 750);
    }, 4000);
  }
  this.controller.verPlanesDeTrabajo().pipe(
    tap(res => {
      this.planes = res;
    })
  ).subscribe()
}

public onFadeOut() {
  if (!this.errorMessage) {
    this.errorMessage = ''
  }
}

}


