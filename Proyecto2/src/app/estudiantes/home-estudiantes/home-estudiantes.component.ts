import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComunicadorExcelService } from 'src/app/controller/DAO/comunicador-excel.service';
import { Estudiante } from 'src/app/model/estudiante';
import { TSede } from 'src/app/model/tsede';

@Component({
  selector: 'app-home-estudiantes',
  templateUrl: './home-estudiantes.component.html',
  styleUrls: ['./home-estudiantes.component.css']
})

export class HomeEstudiantesComponent {
  /*
  @ViewChild("file", {
    read: ElementRef
  }) file: ElementRef;*/

  fileName = '';

  constructor(
    private excelService: ComunicadorExcelService
  ){}

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
    //console.log(this.excelService.separarSede(estudiantes))
  }

  /*
  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();
    }
}
*/
  async cargarExcel(): Promise<void> {
    /*
    let excel = this.file.nativeElement.files;
    var estudiantes = await this.excelService.uploadStudents(excel);
    for (var i = 0; i < estudiantes.length; i++){
      console.log(estudiantes[i].getId())
    }
    */
  }
  
}
