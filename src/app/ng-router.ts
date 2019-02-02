import { HomeComponent } from './components/home.component';
import { QDashboardComponent } from './components/q-dashboard.component';
import { MainScreenComponent } from './components/main-screen.component';
import { QManagementComponent } from './components/q-management.component';
import { UserScreenComponent } from './components/user-screen.component';
import { PAppointmentComponent } from './components/p-appointment.component';
import { MDashboardComponent } from './components/m-dashboard.component';
import { Routes }from '@angular/router';

export const appRoute:Routes = [
{
  path: '',
  component:HomeComponent
},
{
  path: 'home',
  component:HomeComponent
},
{
  path: 'm-dash',
  component:MDashboardComponent
},
{
  path: 'm-screen',
  component:MainScreenComponent
},
{
  path: 'p-appointment',
  component:PAppointmentComponent
},
{
  path: 'q-dash/:id',
  component:QDashboardComponent
},
{
  path: 'user',
  component:UserScreenComponent
},
{
  path: 'q-management',
  component:QManagementComponent
}];
