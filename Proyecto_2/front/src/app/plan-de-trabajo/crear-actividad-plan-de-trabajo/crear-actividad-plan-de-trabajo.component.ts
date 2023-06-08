import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Administrativo } from 'src/app/model/administrativo';
import { Profesor } from 'src/app/model/profesor';
import { Usuario } from 'src/app/model/usuario';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { PasarDatosService } from 'src/app/pasar-datos.service';
import { Actividad } from 'src/app/model/actividad';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { TIndoleActividad } from 'src/app/model/tindoleactividad';
import { TModalidad } from 'src/app/model/tmodalidad';
import { TEstado } from 'src/app/model/testado';
import { Evidencia } from 'src/app/model/evidencia';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-crear-actividad-plan-de-trabajo',
  templateUrl: './crear-actividad-plan-de-trabajo.component.html',
  styleUrls: ['./crear-actividad-plan-de-trabajo.component.css']
})
export class CrearActividadPlanDeTrabajoComponent {
  numeros: number[] = [];
  public profes: Profesor[] = [];
  public profesoresSeleccionados: Profesor[] = [];
  public pasarDatos: PasarDatosService = PasarDatosService.getInstance()
  public fecha = new Date(2023, 4, 16, 12, 30, 45);
  public evidencia: Evidencia = new Evidencia(0, [], "");
  public actividadGuardar: Actividad = new Actividad(0, 0, TIndoleActividad.MOTIVACIONAL, "", '', [], 0, [], TModalidad.PRESENCIAL, "", "", TEstado.CANCELADA, this.evidencia, [], '', "", '');
  remotoSelected: boolean = false;
  presencialSelected: boolean = false;
  tipoDeModalidad: TModalidad = TModalidad.PRESENCIAL
  errorCreacion: boolean = false;
  creacionCorrecta: boolean = false;
  showMessage: boolean = true;
  errorMessage: string = "";
  @ViewChild('registrationCommentaryModal') registrationCommentaryModal!: ElementRef;

  constructor(
    private controller: ControladorService, private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.pasarDatos.planesDeTrabajo)
    this.numeros = Array.from({ length: 16 }, (_, i) => i + 1);
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

  guardarActividad(nombreActividad: string, tipoActividad: string, enlace: string, semana: string, fecha: string, hora: string, fechaPublicacion: string, afiche: string) {
    console.log(fecha)
    console.log(hora)
    if (!nombreActividad || !tipoActividad|| !enlace || !semana || !fecha || !hora || !fechaPublicacion) {
      this.errorMessage = 'Por favor, complete todos los campos';
      return;
    }
    const tipoActividadEnum: TIndoleActividad = TIndoleActividad[tipoActividad as keyof typeof TIndoleActividad];
    const semanaNumber = parseInt(semana);
    const fechaDate = new Date(fecha + " " + hora + " UTC").toISOString().replace('T', ' ').substring(0, 19);
    console.log(fechaDate)
    const fechaPublicar = new Date(fechaPublicacion).toISOString().replace('T', ' ').substring(0, 19);
    console.log("entra ")
    if (this.remotoSelected === true) {
      this.actividadGuardar = new Actividad(0, semanaNumber, tipoActividadEnum, nombreActividad, fechaDate, this.profesoresSeleccionados, 3, [], TModalidad.REMOTA, enlace, afiche, TEstado.PLANEADA, this.evidencia, [], "", "", fechaPublicar);
    } else {
      this.actividadGuardar = new Actividad(0, semanaNumber, tipoActividadEnum, nombreActividad, fechaDate, this.profesoresSeleccionados, 3, [], TModalidad.PRESENCIAL, enlace, afiche, TEstado.PLANEADA, this.evidencia, [], "", "", fechaPublicar);
    }
    console.log(this.actividadGuardar);

    this.controller.crearActividad(this.actividadGuardar, this.pasarDatos.planesDeTrabajo.getId()).subscribe(
      () => {
        this.creacionCorrecta = true;
      },
      (error) => {
        this.errorCreacion = true;
        console.log(error);
      }
    );
  }

  iniciarDesvanecimiento() {
    setTimeout(() => {
      this.showMessage = false;
      this.router.navigate(['/ver-plan-de-trabajo']);
    }, 3000); // 3000 ms = 3 segundos
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
