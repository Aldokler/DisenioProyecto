import { Injectable } from '@angular/core';
import { Workbook, Worksheet } from 'exceljs';
import * as fs from 'file-saver';
import * as XLSX from 'xlsx';
import { Estudiante } from 'src/app/model/estudiante';
import { TSede } from 'src/app/model/tsede';

@Injectable({
  providedIn: 'root'
})

export class ComunicadorExcelService {
  private workbook!: Workbook;
  
  public async downloadStudents(datosEstudiantes: Estudiante[]): Promise<void> {
    this.workbook = new Workbook();
    var estudiantes = this.separarSede(datosEstudiantes);

    for (var hoja = 0; hoja < Object.keys(TSede).length; hoja++){

      // CREAMOS LA PRIMERA HOJA
      const sheet = this.workbook.addWorksheet(Object.keys(TSede)[hoja]);

      // ESTABLECEMOS EL ANCHO Y ESTILO DE LAS COLUMNAS
      sheet.getColumn('B').width = 45;
      sheet.getColumn('C').width = 35;
      sheet.getColumn('D').width = 20;
      sheet.getColumn('E').width = 20;

      //CREAMOS LOS TITULOS PARA LA CABECERA
      const headerRow = sheet.getRow(2);
      // ESTAMOS JALANDO TODAS LAS COLUMNAS DE ESA FILA, "A","B","C"..etc
      headerRow.values = [
        '', // column A
        'Nombre Completo', // column B
        'Correo Electrónico', // column C
        'Celular', // column D
        'Carné', // column E
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

      // INSERTAMOS LOS DATOS EN LAS RESPECTIVAS COLUMNAS
      if (estudiantes[hoja].length != 0){
        const rowsToInsert = sheet.getRows(3, estudiantes[hoja].length)!;
  
        for (let i = 0; i < rowsToInsert.length; i++) {
          const estudiante = estudiantes[hoja][i]; // obtenemos el item segun el index de la iteracion (recorrido)
          const row = rowsToInsert[i]; // obtenemos la primera fila segun el index de la iteracion (recorrido)
  
          //  los valores de itemData seran asignados a "row" (fila actual en la iteracion)
  
          row.values = [
            '', // column A
            estudiante.getNombre() + ' ' + estudiante.getApellido1() + ' ' + estudiante.getApellido2(), // column B
            estudiante.getCorreoElectronico(), // column C
            estudiante.getCelular(), // column D
            estudiante.getId(), // column E
          ];
  
          row.getCell('B').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
          row.getCell('C').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
          row.getCell('D').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
          row.getCell('E').border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'} };
  
        }
      }
    }

    this.workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data]);
      fs.saveAs(blob, 'EstudiantesGeneral.xlsx');
    });
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public async uploadStudents(file: FileReader): Promise<Estudiante[]>{
    var estudiantes: Estudiante[] = []
    file.onload = (e) => {
      var workBook = XLSX.read(file.result,{type:'binary'})
      var sheetNames = workBook.SheetNames
      for (var i = 0; i < sheetNames.length; i++){
        var jason = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[i]]) as { "": string, 'Carné': string, 'Celular': string, 'Correo Electrónico': string, 'Nombre Completo': string }[]
        for (var i1 = 0; i1 < jason.length; i1++){
          var nombreCompleto = this.separarNombre(jason[i1]['Nombre Completo'])
          var estudiante = new Estudiante(
            jason[i1]['Carné'],
            nombreCompleto[0],
            nombreCompleto[1],
            nombreCompleto[2],
            jason[i1]['Correo Electrónico'],
            jason[i1]['Celular'],
            sheetNames[i] as TSede,
            '');
            estudiantes.push(estudiante)
        }
      }
    }
    return estudiantes

    /*
    return this.workbook.xlsx.readFile(file).then(() => {
      const worksheet = this.workbook.worksheets[1]
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
    }).catch()*/
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  private separarNombre(nombre: string): string[]{
    var nombreCompleto: string[] = [];
    var step = 0;

    if (nombre == ''){
      return ['','',''];
    }

    for (var i = 0; i < nombre.length; i++){
      if (nombre.charAt(i) == ' '){
        var name = '';
        for (step; step < i; step++){
          name = name.concat(nombre.charAt(step))
        }
        nombreCompleto.push(name);
      }
    }
    var name = '';
    for (step; step < i; step++){
      name = name.concat(nombre.charAt(step))
    }
    nombreCompleto.push(name);

    return nombreCompleto;
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public separarSede(datosEstudiantes: Estudiante[]): Estudiante[][]{
    var estudiantes: Estudiante[][] = [];
    //Añade listas vacías de acuerdo al número de sede
    var sedes = Object.keys(TSede);
    for (var s = 0; s < sedes.length; s++){ estudiantes.push([])}

    for (var i = 0; i < datosEstudiantes.length; i++){
      var estudiante = datosEstudiantes[i];
      var sede = estudiante.getSede();
      for (var s = 0; s < sedes.length; s++){
        if (estudiante.getSede() == sedes[s]){
          estudiantes[s].push(estudiante);
          break;
        }
      }
    }

    return estudiantes;
  }
}
