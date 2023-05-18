import { Component } from '@angular/core';
import { ControladorService } from 'src/app/controller/controlador.service';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { tap } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { PasarDatosService } from 'src/app/pasar-datos.service';



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
  public annios: Number[] = [];
  listaEquipo: Profesor[] = [];
  public profesoresSeleccionados: Profesor[] = [];
  public errorMessage: String = '';
  public showError: boolean = false;
  public equipoGuiaId: number = 0; // Variable para almacenar el ID del equipo guía
  miUsuario: Usuario | null = null;
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public tipoDeUsuario: string = ""


  ngOnInit(): void {

    if (this.pasarDatos.loginUser instanceof Profesor) {
      if (this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId())) {
        console.log(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()))
        this.tipoDeUsuario = "Coordinador"
      } else {
        this.tipoDeUsuario = "Profesor"
      }

    } else {
      this.tipoDeUsuario = "Administrativo"
    }

    this.controller.getEquiposGuia().pipe(
      tap(res => {
        this.equiposguia = res;
        this.annios = this.equiposguia.map(value => {
          return value.getAnnio()
        }).filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
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
      return equipo.getAnnio() == annioFiltrarNumber && equipo.getSemestre() == semestreFiltrarNumber;
    });
    if (this.equiposguia.length == 1){
      let actual = this.equiposguia[0].getId();
      this.equipoGuiaId = actual
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
  
  seleccionarCoordinador(profesor: Profesor) {
    //añadir el ID del equipo guia 
    console.log(this.equiposguia);
    console.log(this.profesoresSeleccionados);
    console.log(this.equipoGuiaId);
    console.log(profesor.getId());

    this.controller.definirCoordinador(this.equipoGuiaId,profesor.getId()).pipe(
      tap(res => {
        if(res){
          console.log("hola");
        }
      })
    ).subscribe()
}

}
