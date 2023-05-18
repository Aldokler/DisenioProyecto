import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { ApiService } from 'src/app/controller/DAO/SERVICES/api.service';
import { ControladorService } from 'src/app/controller/controlador.service';
import { PasarDatosService } from 'src/app/pasar-datos.service';
import { Profesor } from 'src/app/model/profesor';

@Component({
  selector: 'app-home-equipo-guia',
  templateUrl: './home-equipo-guia.component.html',
  styleUrls: ['./home-equipo-guia.component.css']
})

export class HomeEquipoGuiaComponent {

  miUsuario: Usuario | null = null;
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public tipoDeUsuario: string = ""

  constructor(private controller: ControladorService) { }
  ngOnInit(): void {
    console.log(this.pasarDatos.loginUser instanceof Profesor);
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
  }
}
