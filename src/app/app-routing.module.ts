import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallemployeesComponent } from './components/getallemployees/getallemployees.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path : 'registration' , component: RegistrationComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'dashboard' , component:DashboardComponent,
    children:[
      {path : 'getAllEmployees' , component: GetallemployeesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
