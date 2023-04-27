import { Injectable } from '@angular/core';
import { Workbook, Worksheet } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorExcelService {
  private _workbook!: Workbook;

  async dowloadExcel(dataExcel: string, filename: string): Promise<void> {
    this._workbook = new Workbook();

    //this._workbook.creator = 'DigiDev';

    //await this._createHeroTable(dataExcel.herosTable);
    //await this._createHeroDetail(dataExcel.herosDetail);

    this._workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data]);
      fs.saveAs(blob, filename+'.xlsx');
    });
  }
}
