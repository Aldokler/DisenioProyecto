import { Component } from '@angular/core';
import { ControladorService } from 'src/app/controller/controlador.service';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { tap } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';



@Component({
  selector: 'app-consultar-equipo',
  templateUrl: './consultar-equipo.component.html',
  styleUrls: ['./consultar-equipo.component.css']
})
export class ConsultarEquipoComponent {
  constructor(
    private controller: ControladorService
  ) { }

  public equiposguia: EquipoGuia[] = [];
  listaEquipo: Profesor[] = [];
  public errorMessage: String = '';

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

  // Función para filtrar los equipos guía según el año y semestre seleccionados
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
      this.controller.sleep(4000).then(() => { this.errorMessage = '' });
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
  

}
