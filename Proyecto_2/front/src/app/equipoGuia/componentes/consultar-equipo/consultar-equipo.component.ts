import { Component } from '@angular/core';
import { ControladorService } from 'src/app/controller/controlador.service';
import { EquipoGuia } from 'src/app/model/equipoguia';
import { tap } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Administrativo } from 'src/app/model/administrativo';



@Component({
  selector: 'app-consultar-equipo',
  templateUrl: './consultar-equipo.component.html',
  styleUrls: ['./consultar-equipo.component.css']
})
export class ConsultarEquipoComponent {
  constructor(
    private controller: ControladorService
  ) { }

  public equiposguia: EquipoGuia[] = [];

  ngOnInit(): void {

    this.controller.getEquiposGuia().pipe(
      tap(res => {
        this.equiposguia = res;
        console.log(res);
      })
    ).subscribe()
    
  }
}
