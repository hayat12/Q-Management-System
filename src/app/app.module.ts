import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { QDashboardComponent } from './components/q-dashboard.component';
import { MainScreenComponent } from './components/main-screen.component';
import { QManagementComponent } from './components/q-management.component';
import { UserScreenComponent } from './components/user-screen.component';
import { PAppointmentComponent } from './components/p-appointment.component';
import { MDashboardComponent } from './components/m-dashboard.component';
import {RouterModule, Router,Route, Routes }from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoute } from './ng-router'
// const appRoute:Routes = [
// {
//   path: '',
//   component:HomeComponent
// },
// {
//   path: 'home',
//   component:HomeComponent
// },
// {
//   path: 'm-dash',
//   component:MDashboardComponent
// },
// {
//   path: 'm-screen',
//   component:MainScreenComponent
// },
// {
//   path: 'p-appointment',
//   component:PAppointmentComponent
// },
// {
//   path: 'q-dash',
//   component:QDashboardComponent
// },
// {
//   path: 'user',
//   component:UserScreenComponent
// },
// {
//   path: 'q-management',
//   component:QManagementComponent
// }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QDashboardComponent,
    MainScreenComponent,
    QManagementComponent,
    UserScreenComponent,
    PAppointmentComponent,
    MDashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute) 
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
