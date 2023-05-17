import { Component,OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { ApiService } from '../controller/DAO/SERVICES/api.service';
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
  public pasarDatos:PasarDatosService = PasarDatosService.getInstance()


  constructor(private controller: ControladorService) {}
  ngOnInit(): void {
    console.log(this.pasarDatos.loginUser instanceof Profesor);
  }

}
