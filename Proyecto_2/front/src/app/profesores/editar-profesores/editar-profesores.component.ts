import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';

@Component({
  selector: 'app-editar-profesores',
  templateUrl: './editar-profesores.component.html',
  styleUrls: ['./editar-profesores.component.css']
})
export class EditarProfesoresComponent {

  constructor(
    private controller: ControladorService
  ) {}
  
  ngOnInit(): void {
    this.controller.getProfesor("SJ-01").pipe(
      tap(res => {
       let profesor = res;
       console.log(profesor)
      })
    ).subscribe()

  }

}
