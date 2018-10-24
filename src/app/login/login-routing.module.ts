import { LoginComponent } from './login/login.component';
import { AuthenticationGuardService } from './shared/authentication-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full', canActivate: [AuthenticationGuardService]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {}
