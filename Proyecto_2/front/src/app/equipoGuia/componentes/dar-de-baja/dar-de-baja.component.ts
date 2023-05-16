import { Component } from '@angular/core';
import { ControladorService } from 'src/app/controller/controlador.service';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { tap } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { TRol } from 'src/app/model/trol';

@Component({
  selector: 'app-dar-de-baja',
  templateUrl: './dar-de-baja.component.html',
  styleUrls: ['./dar-de-baja.component.css']
})
export class DarDeBajaComponent {

  constructor(
    private controller: ControladorService
  ) { }

  public equiposguia: EquipoGuia[] = [];
  listaEquipo: Profesor[] = [];
  public profesoresSeleccionados: Profesor[] = [];
  public errorMessage: String = '';
  public showError: boolean = false;

  ngOnInit(): void {

    this.controller.getEquiposGuia().pipe(
      tap(res => {
        this.equiposguia = res;
        let actual = this.equiposguia[0].getId();
        this.controller.getProfesoresDeEquipoGuia(actual).pipe(
          tap(res1 => {
            this.listaEquipo = res1;
          }
          )
        ).subscribe()
      })
    ).subscribe()
  }

  public filterEquiposGuia(annioFiltrar: string, semestre: string) {
    const annioFiltrarNumber = parseInt(annioFiltrar);
    const semestreFiltrarNumber = parseInt(semestre);
    this.equiposguia = this.equiposguia.filter((equipo) => {
      return equipo.getAño() == annioFiltrarNumber && equipo.getSemestre() == semestreFiltrarNumber;
    });
    if (this.equiposguia.length == 1){
      let actual = this.equiposguia[0].getId();
      this.controller.getProfesoresDeEquipoGuia(actual).pipe(
        tap(res1 => {
          this.listaEquipo = res1;
        }
        )
      ).subscribe()
      this.errorMessage = ''
    } else { 
      this.errorMessage = 'No existen equipos guía para el periodo indicado'
      this.showError = true;
  
      setTimeout(() => {
        this.showError = false;
        setTimeout(() => {
          this.errorMessage = '';
        }, 750);
      }, 4000);
    }
    this.controller.getEquiposGuia().pipe(
      tap(res => {
        this.equiposguia = res;
      })
    ).subscribe()
  }

  public onFadeOut() {
    if (!this.errorMessage) {
      this.errorMessage = ''
    }
  }

  seleccionarProfesores(profesor: Profesor) {
    if (this.profesoresSeleccionados.includes(profesor)) {
      this.profesoresSeleccionados = this.profesoresSeleccionados.filter(p => p !== profesor);
    } else {
      this.profesoresSeleccionados.push(profesor);
    }
    console.log(this.profesoresSeleccionados);
    for(const profesor of this.profesoresSeleccionados){
      //this.controller.sacarProfesor(,profesor.getId());
    }
    
  }


}
