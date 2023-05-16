import { Component,OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { ApiService } from '../controller/DAO/SERVICES/api.service';
import { ControladorService } from 'src/app/controller/controlador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() correoUsuario: string;
  @Input() contrasenaInput: string;
  miUsuario: Usuario | null = null;

  constructor(private controller: ControladorService) {
    this.correoUsuario = '';
    this.contrasenaInput = '';
  }
  ngOnInit(): void {
    this.miUsuario = this.controller.ingresar(this.correoUsuario, this.contrasenaInput);
  }

}
