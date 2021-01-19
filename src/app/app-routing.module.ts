import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { FleetComponent } from './fleet/fleet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'fleet', component: FleetComponent 
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'application', component: ApplicationComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
