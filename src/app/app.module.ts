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
import {RouterModule }from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './services/service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appRoute } from './ng-router';
import { InterceptService } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule } from '@angular/material';
import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from '@ngx-material-keyboard/core';

const customLayouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  'Tölles Läyout': {
    'name': 'Awesome layout',
    'keys': [
      [
        ['1', '!'],
        ['2', '@'],
        ['3', '#']
      ]
    ],
    'lang': ['de-CH']
  }
};

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
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatKeyboardModule,
  ],
  providers: [
    ServiceService,
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLayouts },
    InterceptService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptService,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
