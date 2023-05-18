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
<<<<<<< HEAD
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
=======
  fechaUsar: string = "";
  fechaMientras: string = "";
  HoraUsar: Date = new Date();
  fechapublicacionUsar: Date = new Date();
  public evidencia: Evidencia = new Evidencia(0, [], "");
  public actividadGuardar: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL, "", '', [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA, this.evidencia, [], '', "", '');
  dia = "";
  mes = "";
  anio = "";


  ngOnInit(): void {
>>>>>>> 27cba4c57bd80bc6b39e153f7d67b675c9b96dc0

    this.actividadUsar = this.pasarDatos.actividadPlanDeTrabajo;

    this.fechaMientras = this.actividadUsar.getFechaHora();
    console.log("hola");
    console.log(this.fechaMientras);
    const fecha = new Date(this.fechaMientras);

    this.anio = fecha.getFullYear().toString();
    this.mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Agrega ceros a la izquierda si el mes es de un solo dígito

    this.dia = fecha.getDate().toString().padStart(2, '0'); // Agrega ceros a la izquierda si el día es de un solo dígito
    console.log(this.dia);
    console.log(this.anio);
    console.log(this.mes);
    this.fechaUsar = this.dia + "/" +this.mes + "/" + this.anio
    console.log(this.fechaUsar)

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

actualizarActividad(nombre:string,tipo:string,link:string,estado:string,semana:string,
  fecha:string,hora:string,fechaPublicacion:string,afiche:string){

    const tipoActividadEnum: TIndoleActividad = TIndoleActividad[tipo as keyof typeof TIndoleActividad];
    const semanaNumber = parseInt(semana);
    const fechaDate = new Date(fecha).toISOString().replace('T', ' ').substring(0, 19);
    const fechaPublicar = new Date(fechaPublicacion).toISOString().replace('T', ' ').substring(0, 19);
    if (this.remotoSelected === true) {
      this.actividadGuardar = new Actividad(0, semanaNumber, tipoActividadEnum, nombre, fechaDate, this.profesoresSeleccionados, 3, [],TModalidad.REMOTA,link,afiche,TEstado.PLANEADA,this.evidencia,[],fechaPublicar,"",fechaPublicar);
    }else{
      this.actividadGuardar = new Actividad(0, semanaNumber, tipoActividadEnum, nombre, fechaDate, this.profesoresSeleccionados, 3, [],TModalidad.PRESENCIAL,link,afiche,TEstado.PLANEADA,this.evidencia,[],fechaPublicar,"",fechaPublicar);
    }

    this.controller.modificarDatosActividad(this.pasarDatos.planesDeTrabajo.getId(),this.actividadGuardar);

}

}
