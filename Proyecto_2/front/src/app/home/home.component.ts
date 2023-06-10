import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { ControladorService } from 'src/app/controller/controlador.service';
import { PasarDatosService } from '../pasar-datos.service';
import { Profesor } from '../model/profesor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

    } else if (this.pasarDatos.loginUser instanceof Administrativo){
      this.tipoDeUsuario = "Administrativo"
    }else {
      this.tipoDeUsuario = "Estudiante"
    }
  }

}
