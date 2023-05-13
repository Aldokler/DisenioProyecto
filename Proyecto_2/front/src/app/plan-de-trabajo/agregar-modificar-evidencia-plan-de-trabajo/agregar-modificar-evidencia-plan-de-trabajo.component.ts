import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ControladorService } from 'src/app/controller/controlador.service';
import { Router } from '@angular/router';
import { Evidencia } from 'src/app/model/evidencia';

@Component({
  selector: 'app-agregar-modificar-evidencia-plan-de-trabajo',
  templateUrl: './agregar-modificar-evidencia-plan-de-trabajo.component.html',
  styleUrls: ['./agregar-modificar-evidencia-plan-de-trabajo.component.css']
})
export class AgregarModificarEvidenciaPlanDeTrabajoComponent {
  constructor(
    private controller: ControladorService
  ) {}
  public evidencias : Evidencia[] = [];


  ngOnInit(): void {
    
  }

  agregarEvidencia(){

    }

  eliminarFotoEvidencia(){

    }
}
