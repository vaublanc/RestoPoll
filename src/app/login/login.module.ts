import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';
import { AuthenticationGuardService } from './shared/authentication-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CustomerService } from './shared/customer.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthenticationGuardService,
    AuthenticationService,
    CustomerService
  ]
})
export class LoginModule { }
