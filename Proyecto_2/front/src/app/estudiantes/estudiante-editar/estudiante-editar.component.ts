import { Component, TRANSLATIONS } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Estudiante } from 'src/app/model/estudiante';
import { Profesor } from 'src/app/model/profesor';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { PasarDatosService } from 'src/app/pasar-datos.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-editar',
  templateUrl: './estudiante-editar.component.html',
  styleUrls: ['./estudiante-editar.component.css']
})
export class EstudianteEditarComponent {

  constructor(
    private controller: ControladorService,private router: Router
  ) { }

  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public estudiante:Estudiante = new Estudiante("","","","","","",TSede.CA,"");

  ngOnInit(): void {

    this.controller.getEstudiante(this.pasarDatos.loginUser.getId()).pipe(
      tap(res => {
        this.estudiante = res;
        console.log(this.estudiante)
      })
    ).subscribe()

  }

  guardarEdicionEstudiante(fotoEstudiante:string,telefonoCelular:string){
    if (!fotoEstudiante || !telefonoCelular) {
      this.showErrorAlert();
      return;
    }
    
  }


  showSuccessAlert() {
    swal.fire({
      icon: 'success',
      title: 'Registrado con éxito',
      timer: 2000
    });
    this.router.navigate(['/ver-plan-de-trabajo']);
  }

  showErrorAlert() {
    swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Ocurrió un error. Por favor, inténtalo nuevamente.',
      timer: 3000
    });
  }

}
