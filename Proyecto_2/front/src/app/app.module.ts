import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { HomeComponent } from './home/home.component';
import { CrearPlanDeTrabajoComponent } from './plan-de-trabajo/crear-plan-de-trabajo/crear-plan-de-trabajo.component';
import { HomePlanDeTrabajoComponent } from './plan-de-trabajo/home-plan-de-trabajo/home-plan-de-trabajo.component';
import { ModificarActividadPlanDeTrabajoComponent } from './plan-de-trabajo/modificar-actividad-plan-de-trabajo/modificar-actividad-plan-de-trabajo.component';
import { CrearActividadPlanDeTrabajoComponent } from './plan-de-trabajo/crear-actividad-plan-de-trabajo/crear-actividad-plan-de-trabajo.component';
import { AgregarModificarEvidenciaPlanDeTrabajoComponent } from './plan-de-trabajo/agregar-modificar-evidencia-plan-de-trabajo/agregar-modificar-evidencia-plan-de-trabajo.component';
import { VerPlanDeTrabajoComponent } from './plan-de-trabajo/ver-plan-de-trabajo/ver-plan-de-trabajo.component';
import { HomeProfesoresComponent } from './profesores/home-profesores/home-profesores.component';
import { EditarProfesoresComponent } from './profesores/editar-profesores/editar-profesores.component';
import { HomeEstudiantesComponent } from './estudiantes/home-estudiantes/home-estudiantes.component';
import { EditarEstudiantesComponent } from './estudiantes/editar-estudiantes/editar-estudiantes.component';
import { HomeEquipoGuiaComponent } from './equipoGuia/home-equipo-guia/home-equipo-guia.component';
import { CrearEquipoComponent } from './equipoGuia/componentes/crear-equipo/crear-equipo.component';
import { RegistrarProfesorGuiaComponent } from './equipoGuia/componentes/registrar-profesor-guia/registrar-profesor-guia.component';
import { DarDeBajaComponent } from './equipoGuia/componentes/dar-de-baja/dar-de-baja.component';
import { ConsultarEquipoComponent } from './equipoGuia/componentes/consultar-equipo/consultar-equipo.component';
import { VerActividadesPlanDeTrabajoComponent } from './plan-de-trabajo/ver-actividades-plan-de-trabajo/ver-actividades-plan-de-trabajo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperacionComponent,
    HomeComponent,
    CrearPlanDeTrabajoComponent,
    HomePlanDeTrabajoComponent,
    ModificarActividadPlanDeTrabajoComponent,
    CrearActividadPlanDeTrabajoComponent,
    AgregarModificarEvidenciaPlanDeTrabajoComponent,
    VerPlanDeTrabajoComponent,
    HomeProfesoresComponent,
    EditarProfesoresComponent,
    HomeEstudiantesComponent,
    EditarEstudiantesComponent,
    HomeEquipoGuiaComponent,
    CrearEquipoComponent,
    RegistrarProfesorGuiaComponent,
    DarDeBajaComponent,
    ConsultarEquipoComponent,
    VerActividadesPlanDeTrabajoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
