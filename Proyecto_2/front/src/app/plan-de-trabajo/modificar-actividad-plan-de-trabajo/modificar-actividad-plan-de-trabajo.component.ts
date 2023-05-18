import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Actividad } from 'src/app/model/actividad';
import { Evidencia } from 'src/app/model/evidencia';
import { Profesor } from 'src/app/model/profesor';
import { TEstado } from 'src/app/model/testado';
import { TIndoleActividad } from 'src/app/model/tindoleactividad';
import { TModalidad } from 'src/app/model/tmodalidad';
import { TRol } from 'src/app/model/trol';
import { TSede } from 'src/app/model/tsede';
import { PasarDatosService } from 'src/app/pasar-datos.service';

@Component({
  selector: 'app-modificar-actividad-plan-de-trabajo',
  templateUrl: './modificar-actividad-plan-de-trabajo.component.html',
  styleUrls: ['./modificar-actividad-plan-de-trabajo.component.css']
})

export class ModificarActividadPlanDeTrabajoComponent {

  constructor(
    private controller: ControladorService
  ) { }

  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public fecha = new Date(2023, 4, 16, 12, 30, 45);
  public evidenciar: Evidencia = new Evidencia(0, [], "");
  public actividadUsar: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL, "", '', [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA, this.evidenciar, [], '', "", '');
  public profesoresSeleccionados: Profesor[] = [];
  public profes: Profesor[] = [];
  remotoSelected: boolean = false;
  presencialSelected: boolean = false;
  fechaUsar:string = "";
  fechaMientras:string = "";
  HoraUsar:Date = new Date();
  fechapublicacionUsar:Date = new Date();


  ngOnInit(): void {
    this.actividadUsar = this.pasarDatos.actividadPlanDeTrabajo
    this.fechaMientras = ''
    const fecha = new Date(this.fechaMientras);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Los meses se indexan desde 0, por eso se suma 1
    const anio = fecha.getFullYear();

    this.fechaUsar = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${anio}`;
    console.log(this.fechaMientras)

  }

  seleccionarProfesores(profesor: Profesor) {
    if (this.profesoresSeleccionados.includes(profesor)) {
      this.profesoresSeleccionados = this.profesoresSeleccionados.filter(p => p !== profesor);
    } else {
      this.profesoresSeleccionados.push(profesor);
    }
    console.log(this.profesoresSeleccionados);
  }

  selectRemoto() {
    this.remotoSelected = true;
    this.presencialSelected = false;
  }

  selectPresencial() {
    this.remotoSelected = false;
    this.presencialSelected = true;
  }
}
