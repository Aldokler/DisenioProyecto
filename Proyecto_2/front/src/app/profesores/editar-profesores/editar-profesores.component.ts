import { Component, TRANSLATIONS } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Profesor } from 'src/app/model/profesor';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { PasarDatosService } from 'src/app/pasar-datos.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-profesores',
  templateUrl: './editar-profesores.component.html',
  styleUrls: ['./editar-profesores.component.css']
})
export class EditarProfesoresComponent {

  constructor(
    private controller: ControladorService,private router: Router
  ) { }

  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public profesor:Profesor = new Profesor("","","","","","",TSede.CA,"1234","","",TRol.GUIA);
  public foto: any

  ngOnInit(): void {
    this.controller.getProfesor(this.pasarDatos.guardarProfesor.getId()).pipe(
      tap(res => {
        this.profesor = res;
        this.foto = this.profesor.getFotografia()
        console.log(this.profesor)
      })
    ).subscribe()

  }

  guardarEdicionProfesor(nombreProfesor:string, correoElectronico:string, fotoProfesor:string,telefonoCelular:string,primerApellido:string,segundoApellido:string){
    if (!nombreProfesor || !correoElectronico|| !fotoProfesor || !telefonoCelular || !primerApellido  || !segundoApellido) {
      this.showErrorAlert();
      return;
    }
    const profesorEditar:Profesor = new Profesor(this.pasarDatos.guardarProfesor.getId(),nombreProfesor,primerApellido,segundoApellido,correoElectronico,telefonoCelular,this.pasarDatos.guardarProfesor.getSede(),
    this.pasarDatos.guardarProfesor.getContraseñA(),this.pasarDatos.guardarProfesor.getTelefonoOficina(), fotoProfesor,this.pasarDatos.guardarProfesor.getRol());
    this.controller.editarDatosProfesor(profesorEditar).subscribe(
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
    this.router.navigate(['/home-plan-de-trabajo']);
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
