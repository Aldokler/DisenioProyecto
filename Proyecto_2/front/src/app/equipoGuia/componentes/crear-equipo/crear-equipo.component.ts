import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent {
  constructor(
    private controller: ControladorService
  ) {}

  public profes: Profesor[] = [];
  public profesoresSeleccionados: Profesor[] = [];

  ngOnInit(): void {
    

    this.controller.getProfesores().pipe(
      tap(res => {
       this.profes = res;
      })
    ).subscribe()
  }
guardarEquipo(semestre:string,annio:string){

}

public seleccionarProfesor(profesor: Profesor) {

}
  
}
