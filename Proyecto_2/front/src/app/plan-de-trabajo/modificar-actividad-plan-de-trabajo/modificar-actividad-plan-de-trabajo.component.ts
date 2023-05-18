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
  tipoDeModalidad: TModalidad = TModalidad.PRESENCIAL




  public evidencia: Evidencia = new Evidencia(0, [], "");
  public actividadGuardar: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL, "", '', [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA, this.evidencia, [], '', "", '');
  public actividadGuardarda: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL, "", '', [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA, this.evidencia, [], '', "", '');
  dia: string = '';
  mes: string = '';
  anio: string = '';
  diaPublicar: string = '';
  mesPublicar: string = '';
  anioPublicar: string = '';
  fechaNueva: string = '';
  fechaPublicacionNueva: string = '';
  hora: string = '';
  minutos: string = '';


  ngOnInit(): void {
    this.actividadUsar = this.pasarDatos.actividadPlanDeTrabajo;

    this.fechaNueva = new Date(this.actividadUsar.getFechaHora()).toISOString().replace('T', ' ').substring(0, 19);
    this.fechaPublicacionNueva = new Date(this.actividadUsar.getFechaAPublicar()).toISOString().replace('T', ' ').substring(0, 19);

    const fecha = new Date(this.fechaNueva);
    this.dia = fecha.getDate().toString().padStart(2, '0');
    this.mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    this.anio = fecha.getFullYear().toString();

    const fechaPublicar = new Date(this.fechaPublicacionNueva);
    this.diaPublicar = fechaPublicar.getDate().toString().padStart(2, '0');
    this.mesPublicar = (fechaPublicar.getMonth() + 1).toString().padStart(2, '0');
    this.anioPublicar = fechaPublicar.getFullYear().toString();

    const hora = this.fechaNueva.substring(11, 13);
    const minutos = this.fechaNueva.substring(14, 16);
    this.hora = hora;
    this.minutos = minutos;
    console.log(this.fechaNueva)
    console.log(this.hora)
    console.log(this.minutos)


    this.controller.getProfesores().pipe(
      tap(res => {
        this.profes = res;
      })
    ).subscribe()
  }

  seleccionarProfesores(profesor: Profesor) {
    if (this.profesoresSeleccionados.includes(profesor)) {
      this.profesoresSeleccionados = this.profesoresSeleccionados.filter(p => p !== profesor);
    } else {
      this.profesoresSeleccionados.push(profesor);
    }
  }

  actualizarActividad(nombre: string, tipo: string, link: string, estado: string, semana: string,
    fecha: string, hora: string, fechaPublicacion: string, afiche: string) {

    const tipoActividadEnum: TIndoleActividad = TIndoleActividad[tipo as keyof typeof TIndoleActividad];
    const semanaNumber = parseInt(semana);
    const fechaDate = new Date(fecha).toISOString().replace('T', ' ').substring(0, 19);
    const fechaPublicar = new Date(fechaPublicacion).toISOString().replace('T', ' ').substring(0, 19);
    if (this.remotoSelected === true) {
      this.actividadGuardarda = new Actividad(0, semanaNumber, tipoActividadEnum, nombre, fechaDate, this.profesoresSeleccionados, 3, [], TModalidad.REMOTA, link, afiche, TEstado.PLANEADA, this.evidencia, [], fechaPublicar, "", fechaPublicar);
    } else {
      this.actividadGuardarda = new Actividad(0, semanaNumber, tipoActividadEnum, nombre, fechaDate, this.profesoresSeleccionados, 3, [], TModalidad.PRESENCIAL, link, afiche, TEstado.PLANEADA, this.evidencia, [], fechaPublicar, "", fechaPublicar);
    }

    this.controller.modificarDatosActividad(this.pasarDatos.planesDeTrabajo.getId(), this.actividadGuardarda);

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
