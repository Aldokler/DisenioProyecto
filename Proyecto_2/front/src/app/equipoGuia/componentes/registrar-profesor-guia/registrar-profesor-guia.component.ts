import { Component } from '@angular/core';
import { Profesor } from 'src/app/model/profesor';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';

@Component({
  selector: 'app-registrar-profesor-guia',
  templateUrl: './registrar-profesor-guia.component.html',
  styleUrls: ['./registrar-profesor-guia.component.css']
})
export class RegistrarProfesorGuiaComponent {
  constructor(
    private controller: ControladorService
  ) { }


  public rolProfesor: TRol = TRol.GUIA;
  nombreArchivo:String = "";

  registrarProfesor(
    codigoCampus: String, correoElectronico: string, telefonoCelular: string, nombreProfesor: string, telefonoOficina: string, fotoProfesor: string, primerApellido: string, segundoApellido: string) {
    const codigoCampusEnum: TSede = TSede[codigoCampus as keyof typeof TSede];
    const profesor: Profesor = new Profesor("algo", nombreProfesor, primerApellido, segundoApellido, correoElectronico, telefonoCelular, codigoCampusEnum, "1234", telefonoOficina, fotoProfesor, this.rolProfesor);
    console.log(profesor);
    this.controller.addProfesor(profesor).pipe(
      tap(res => {
        if (res) {
          console.log("hola")
          console.log(fotoProfesor);
        }
      })
    ).subscribe()
  }

 /* handleFileInput(event: any) {
    const file = event.target.files[0]
    console.log(file)
    var ruta = URL.createObjectURL(file);
    console.log(ruta);
  }*/

}
