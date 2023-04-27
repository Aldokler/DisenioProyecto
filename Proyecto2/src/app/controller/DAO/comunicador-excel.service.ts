import { Injectable } from '@angular/core';
import { Workbook, Worksheet } from 'exceljs';
import * as fs from 'file-saver';
import { Estudiante } from 'src/app/model/estudiante';
import { TSede } from 'src/app/model/tsede';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorExcelService {
  private workbook!: Workbook;
  
  public async downloadStudents(datosEstudiantes: Estudiante[]): Promise<void> {
    this.workbook = new Workbook();

    // CREAMOS LA PRIMERA HOJA
    const sheet = this.workbook.addWorksheet('Estudiantes');

    // ESTABLECEMOS EL ANCHO Y ESTILO DE LAS COLUMNAS
    sheet.getColumn('B').width = 45;
    sheet.getColumn('C').width = 35;
    sheet.getColumn('D').width = 20;
    sheet.getColumn('E').width = 20;
    sheet.getColumn('F').width = 10;

    //CREAMOS LOS TITULOS PARA LA CABECERA
    const headerRow = sheet.getRow(2);
    // ESTAMOS JALANDO TODAS LAS COLUMNAS DE ESA FILA, "A","B","C"..etc
    headerRow.values = [
      '', // column A
      'Nombre Completo', // column B
      'Correo Electrónico', // column C
      'Celular', // column D
      'Carné', // column E
      'Sede', // column F
    ];

    headerRow.font = { bold: true, size: 14 };

    //COLOR Y BORDES DE LOS HEADERS
    sheet.getCell('B2').border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
    }
    sheet.getCell('B2').fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'FF9BF095'},
    }
    sheet.getCell('C2').border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
    }
    sheet.getCell('C2').fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'FFF78B86'},
    }
    sheet.getCell('D2').border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
    }
    sheet.getCell('D2').fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'FF86DDF7'},
    }
    sheet.getCell('E2').border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
    }
    sheet.getCell('E2').fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'FFD086F7'},
    }
    sheet.getCell('F2').border = {
      top: {style:'thin'},
      left: {style:'thin'},
      bottom: {style:'thin'},
      right: {style:'thin'}
    }
    sheet.getCell('F2').fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{argb:'FF8886F7'},
    }

    // INSERTAMOS LOS DATOS EN LAS RESPECTIVAS COLUMNAS
    const rowsToInsert = sheet.getRows(3, datosEstudiantes.length)!;

    for (let i = 0; i < rowsToInsert.length; i++) {
      const estudiante = datosEstudiantes[i]; // obtenemos el item segun el index de la iteracion (recorrido)
      const row = rowsToInsert[i]; // obtenemos la primera fila segun el index de la iteracion (recorrido)

      //  los valores de itemData seran asignados a "row" (fila actual en la iteracion)

      row.values = [
        '', // column A
        estudiante.getNombre() + ' ' + estudiante.getApellido1() + ' ' + estudiante.getApellido2(), // column B
        estudiante.getCorreoElectronico(), // column C
        estudiante.getCelular(), // column D
        estudiante.getId(), // column E
        estudiante.getSede(), // column F
      ];

      row.getCell('B').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
      row.getCell('C').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
      row.getCell('D').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
      row.getCell('E').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
      row.getCell('F').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };

    }

    this.workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data]);
      fs.saveAs(blob, 'EstudiantesGeneral.xlsx');
    });
  }

  public async uploadStudents(datosEstudiantes: string): Promise<Estudiante[]> {
    this.workbook = new Workbook();
    const content = await this.workbook.xlsx.readFile(datosEstudiantes);

    const worksheet = content.worksheets[1]
    const rowStartIndex = 3;
    const numberOfRows = worksheet.rowCount - 2;
    
    const rows = worksheet.getRows(rowStartIndex, numberOfRows) ?? [];
    var estudiantes: Estudiante[] = [];

    for (let i = 0; i < rows.length; i++){
      var nombreCompleto = this.separarNombre(rows[i].getCell(2).toString())
      var estudiante = new Estudiante(
        rows[i].getCell(5).toString(),
        nombreCompleto[0],
        nombreCompleto[1],
        nombreCompleto[2],
        rows[i].getCell(3).toString(),
        rows[i].getCell(4).toString(),
        TSede.CA,
        '');
    }
    return estudiantes;
  }

  private separarNombre(nombre: string): string[]{
    var nombreCompleto: string[] = [];
    var step = 0;

    for (var i = 0; i < nombre.length; i++){
      if (nombre.charAt(i) == ' '){
        var name = '';
        for (step; step < i; step++){
          name.concat(nombre.charAt(step))
        }
        nombreCompleto.push(name);
      }

    }

    return nombreCompleto;
  }
}
