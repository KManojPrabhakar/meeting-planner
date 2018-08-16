import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { LoginComponent } from "./user/login/login.component";
import { UserModule } from "./user/user.module";
import { AppService } from "./app.service";
import { UserSlotModule } from "./user-slot/user-slot.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserModule,
    UserSlotModule,
    ToastModule.forRoot(),
    HttpClientModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
