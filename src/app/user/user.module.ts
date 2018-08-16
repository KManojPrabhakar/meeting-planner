import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'sign-up', component: SignupComponent },
      { path: 'reset/:token', component: ResetComponent },
      { path: 'forgot', component: ForgotComponent }


    ])

  ],
  declarations: [LoginComponent, SignupComponent, ForgotComponent, ResetComponent]
})
export class UserModule { }
