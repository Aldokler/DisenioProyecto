import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { Usuario } from 'src/app/model/usuario';
import { EquipoGuia } from 'src/app/model/equipoguia';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent {
  constructor(
    private controller: ControladorService
  ) { }

  public profes: Profesor[] = [];
  public profesoresSeleccionados: Profesor[] = [];
  public id: number = 0;
  public semestreEntero: number = 0;
  public annioEntero: number = 0;

  ngOnInit(): void {
    this.controller.getProfesores().pipe(
      tap(res => {
        this.profes = res;
      })
    ).subscribe()
  }

  seleccionarProfesores(profesor: Profesor) {
    if (this.profesoresSeleccionados.includes(profesor)) {
      this.profesoresSeleccionados = this.profesoresSeleccionados.filter(p => p !== profesor);
    } else {
      this.profesoresSeleccionados.push(profesor);
    }
    console.log(this.profesoresSeleccionados);
  }

  guardarEquipo(semestre: string, annio: string) {
    this.semestreEntero = parseInt(semestre);
    this.annioEntero = parseInt(annio);
    if (this.semestreEntero && this.annioEntero && this.profesoresSeleccionados.length > 0) {

      const equipo: EquipoGuia = new EquipoGuia( 0, this.profesoresSeleccionados, this.annioEntero, this.semestreEntero);
      this.controller.crearEquipo(equipo).pipe(
        tap(res => {
          if (res){ console.log("Eureka!")}
        })
      ).subscribe()
    };
  }

}
