import { Component, TRANSLATIONS } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Estudiante } from 'src/app/model/estudiante';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { PasarDatosService } from 'src/app/pasar-datos.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-estudiantes',
  templateUrl: './editar-estudiantes.component.html',
  styleUrls: ['./editar-estudiantes.component.css']
})
export class EditarEstudiantesComponent {

  constructor(
    private controller: ControladorService,private router: Router
  ) { }

  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public estudiante:Estudiante = new Estudiante("","" ,"","","","",TSede.AL,"",null);
  public foto: any

  ngOnInit(): void {
    this.controller.getEstudiante(this.pasarDatos.guardarEstudiante.getId()).pipe(
      tap(res => {
        this.estudiante = res;
        console.log(this.estudiante)
      })
    ).subscribe()

  }

  guardarEdicionEstudiante(carne:string,correoElectronico:string,telefono:string,nombre:string,primerApellido:string,segundoApellido:string){
    if (!carne || !correoElectronico || !telefono || !nombre  || !primerApellido || !segundoApellido ) {
      this.showErrorAlert();
      return;
    }
    const estudianteEditar:Estudiante = new Estudiante(carne,nombre,primerApellido,segundoApellido,correoElectronico,telefono,this.pasarDatos.guardarEstudiante.getSede(),this.pasarDatos.guardarEstudiante.getContraseñA(),this.pasarDatos.guardarEstudiante.getFoto());
    console.log(estudianteEditar)
    this.controller.editarDatosEstudiante(estudianteEditar).subscribe(
      () => {
        this.showSuccessAlert() ;
      }
    )
  }

  showSuccessAlert() {
    swal.fire({
      icon: 'success',
      title: 'Registrado con éxito',
      timer: 2000
    });
    this.router.navigate(['/home-estudiantes']);
  }

  showErrorAlert() {
    swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error al crear el plan de trabajo. Por favor, inténtalo nuevamente.',
      timer: 3000
    });
  }


}
