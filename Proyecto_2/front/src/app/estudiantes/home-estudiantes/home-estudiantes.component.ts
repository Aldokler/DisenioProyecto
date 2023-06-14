import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ComunicadorExcelService } from 'src/app/controller/DAO/comunicador-excel.service';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Estudiante } from 'src/app/model/estudiante';
import { Profesor } from 'src/app/model/profesor';
import { TSede } from 'src/app/model/tsede';
import { PasarDatosService } from 'src/app/pasar-datos.service';

@Component({
  selector: 'app-home-estudiantes',
  templateUrl: './home-estudiantes.component.html',
  styleUrls: ['./home-estudiantes.component.css']
})

export class HomeEstudiantesComponent {

  public pasarDatos:PasarDatosService = PasarDatosService.getInstance()
  fileName = '';
  public tipoDeUsuario: string = "";
  public showError = false
  public errorMessage = ''

  constructor(
    private controller: ControladorService
  ){}

  public estudiantes: Estudiante[] = [];

  descargarExcel(): void {
    this.controller.downloadStudents(this.estudiantes);
  }

  cargarExcel() {
  }

  handleFileInput(event: any){
    const file = event.target.files[0]
    let fileReader = new FileReader()
    fileReader.readAsBinaryString(file)
    this.controller.uploadStudents(fileReader).then(students => {
      this.estudiantes.concat(students)
      this.pasarDatos.estudiantes.concat(students)
      this.estudiantes.forEach((estudiante) => {
        this.controller.addEstudiante(estudiante)
      })
    }).catch()
  }

  ngOnInit(): void {
    this.controller.getEstudiantes(1).pipe(
      tap(res => {
       this.pasarDatos.estudiantes = res;
       this.estudiantes = res;
      })
    ).subscribe()

    if(this.pasarDatos.loginUser instanceof Profesor){
      if(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()) ){
        console.log(this.controller.revisarCoordinador(this.pasarDatos.loginUser.getId()))
        this.tipoDeUsuario = "Coordinador"
      }else{
        this.tipoDeUsuario = "Profesor"
      }

    }else{
      this.tipoDeUsuario ="Administrativo"
    }


    //Prueabilla ahí
    console.log("suscriptorcillos ahí")
    this.controller.no
  }

  filtrarEstudiantes(carne:string,campus:string){
    this.estudiantes = this.pasarDatos.estudiantes
    var estudiantesFiltrados: Estudiante[] = []
    if (carne != ''){
      estudiantesFiltrados = this.estudiantes.filter((estudiante) => {
        console.log(carne)
        console.log(estudiante.getId())
        return estudiante.getId() == carne
      });
    } else if (campus == '') {
      estudiantesFiltrados = this.estudiantes
    } else {
      estudiantesFiltrados = this.estudiantes.filter((estudiante) => {
        return estudiante.getSede() == campus
      });
    }
    this.estudiantes = estudiantesFiltrados;
  }

  guardarDatosEstudiante(estudiante:Estudiante){
    this.pasarDatos.guardarEstudiante = estudiante
  }
  
}
