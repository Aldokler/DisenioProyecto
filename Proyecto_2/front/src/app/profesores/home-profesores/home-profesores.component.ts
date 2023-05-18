import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Administrativo } from 'src/app/model/administrativo';
import { Estudiante } from 'src/app/model/estudiante';
import { Profesor } from 'src/app/model/profesor';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { Usuario } from 'src/app/model/usuario';
import { PasarDatosService } from 'src/app/pasar-datos.service';

@Component({
  selector: 'app-home-profesores',
  templateUrl: './home-profesores.component.html',
  styleUrls: ['./home-profesores.component.css']
})
export class HomeProfesoresComponent {


  constructor(
    private controller: ControladorService
  ) {}

  public profes: Profesor[] = [];
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()

  ngOnInit(): void {

    this.controller.getProfesores().pipe(
      tap(res => {
       this.profes = res;
      })
    ).subscribe()

  }

  guardarDatosProfesor(profesorGuardado: Profesor) {
    this.pasarDatos.guardarProfesor = profesorGuardado;
  }

}
