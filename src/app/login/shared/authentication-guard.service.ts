import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CustomerService } from './customer.service';

@Injectable()
export class AuthenticationGuardService {

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private navigationService: NavigationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.customerService.isLogged()) {
      return true;
    } else {
      this.navigationService.navigate('/login');
      return false;
    }
  }
}
