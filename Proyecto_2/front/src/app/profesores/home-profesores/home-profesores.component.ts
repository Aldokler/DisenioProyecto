import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Profesor } from 'src/app/model/profesor';

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

  ngOnInit(): void {
    this.controller.getProfesores().pipe(
      tap(res => res.forEach(element => {
        element.setNombre(" II" + element.getNombre())
        console.log(element.getId() + element.getNombre())
      })) 
    ).subscribe()
  }
}
