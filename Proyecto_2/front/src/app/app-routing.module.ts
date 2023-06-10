import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
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
import { MensajesComponent } from './mensajes/mensajes.component';
import { EstudianteEditarComponent } from './estudiantes/estudiante-editar/estudiante-editar.component';

//Rutas de navegación
const routes: Routes = [
    {path: '',redirectTo: "login", pathMatch: "full"},

    {path: 'login',component: LoginComponent},
    {path: 'recuperacion',component: RecuperacionComponent},
    {path: 'home',component: HomeComponent},


    {path: 'crear-plan-de-trabajo',component: CrearPlanDeTrabajoComponent},
    {path: 'home-plan-de-trabajo',component: HomePlanDeTrabajoComponent},

    {path: 'modificar-actividad-plan-de-trabajo',component: ModificarActividadPlanDeTrabajoComponent},
    {path: 'crear-actividad-plan-de-trabajo',component: CrearActividadPlanDeTrabajoComponent},
    {path: 'agregar-modificar-evidencia-plan-de-trabajo',component: AgregarModificarEvidenciaPlanDeTrabajoComponent},
    {path: 'ver-plan-de-trabajo',component: VerPlanDeTrabajoComponent},
    {path: 'ver-actividades-plan-de-trabajo',component: VerActividadesPlanDeTrabajoComponent},

    {path: 'home-profesores',component: HomeProfesoresComponent},
    {path: 'editar-profesores',component: EditarProfesoresComponent},

    {path: 'home-estudiantes',component: HomeEstudiantesComponent},
    {path: 'editar-estudiantes',component: EditarEstudiantesComponent},

    {path: 'home-equipo-guia',component: HomeEquipoGuiaComponent},
    {path: 'crear-equipo',component: CrearEquipoComponent},
    {path: 'registrar-profesor-guia',component: RegistrarProfesorGuiaComponent},
    {path: 'dar-de-baja',component: DarDeBajaComponent},
    {path: 'consultar-equipo',component: ConsultarEquipoComponent},
    {path: 'mensajes',component: MensajesComponent},
    {path: 'estudiante-editar',component: EstudianteEditarComponent},

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }