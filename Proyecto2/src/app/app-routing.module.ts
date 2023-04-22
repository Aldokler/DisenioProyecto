import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { HomeComponent } from './home/home.component';


//Rutas de navegación
const routes: Routes = [
    {path: '',redirectTo: "login", pathMatch: "full"},
    {path: 'login',component: LoginComponent},
    {path: 'recuperacion',component: RecuperacionComponent},
    {path: 'home',component: HomeComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }