import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { Usuario } from 'src/app/model/usuario';

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

  usuario1:Usuario = new Profesor('', '', '', '', '', '', TSede.CA, '', '', '', TRol.GUIA);
  usuario2:Usuario = new Administrativo('', '', '', '', '', '', TSede.CA, '', '');

  ngOnInit(): void {
    this.controller.getProfesores().pipe(
      tap(res => {
       this.profes = res;
      })
    ).subscribe()

    if( this.usuario1 instanceof Profesor){
      console.log("hola");
    }
  }
}
