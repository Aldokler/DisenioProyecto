import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperacionComponent } from './recuperacion/recuperacion.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },

    {
    path: 'recuperacion',
    component: RecuperacionComponent
    },

    {
    path: 'home',
    component: HomeComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }