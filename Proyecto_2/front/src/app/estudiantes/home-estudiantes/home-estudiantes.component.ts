import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ComunicadorExcelService } from 'src/app/controller/DAO/comunicador-excel.service';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Estudiante } from 'src/app/model/estudiante';
import { TSede } from 'src/app/model/tsede';

@Component({
  selector: 'app-home-estudiantes',
  templateUrl: './home-estudiantes.component.html',
  styleUrls: ['./home-estudiantes.component.css']
})

export class HomeEstudiantesComponent {

  fileName = '';

  constructor(
    private excelService: ComunicadorExcelService,
    private controller: ControladorService
  ){}

  public estudiantes: Estudiante[] = [];

  descargarExcel(): void {
    var estudiantes: Estudiante[] = [];
    estudiantes.push(new 
      Estudiante("2020023569", "David", "Pastor", "Barrientos",
       "davidpastorb@estudiantec.cr", "88888888", TSede.SJ, "1234"));
    estudiantes.push(new 
      Estudiante("0000000001", "Francisco", "Torres", "Rojas",
       "ftorres@arpa.net", "12345678", TSede.CA, "LinuxRules"));
    estudiantes.push(new 
      Estudiante("2015684651", "Miguel", "Cervantes", "Quijote",
       "elmiguelin@gmail.com", "88888888", TSede.SJ, "1234"));
    estudiantes.push(new 
      Estudiante("2015684651", "Miguel", "Cervantes", "Quijote",
       "elmiguelin@gmail.com", "88888888", TSede.AL, "1234"));
    estudiantes.push(new 
      Estudiante("2015684651", "Miguel", "Cervantes", "Quijote",
       "elmiguelin@gmail.com", "88888888", TSede.SC, "1234"));
    this.excelService.downloadStudents(estudiantes);
  }

  cargarExcel() {
  }

  handleFileInput(event: any){
    const file = event.target.files[0]
    console.log(file)
    this.excelService.uploadStudents(file).then(students => {
      this.estudiantes = students
      console.log(this.estudiantes)
    }).catch()
  }

  ngOnInit(): void {
    this.controller.getEstudiantes().pipe(
      tap(res => {
       this.estudiantes = res;
      })
    ).subscribe()
  }
  
}
