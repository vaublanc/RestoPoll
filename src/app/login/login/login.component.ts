import { NavigationService } from './../../core/navigation/navigation.service';
import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { CustomerService } from '../shared/customer.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    email = '';
    password = '';

    constructor(
        private authenticationService: AuthenticationService,
        private customerService: CustomerService,
        private navigationService: NavigationService
    ) {}

    tryLogin() {
        this.authenticationService.login(this.email).subscribe(
            userReturned => {
                if (this.password === userReturned.password) {
                    this.customerService.setToken();
                    this.navigationService.navigate('home-page');
                } else {

                }
            }
        );
    }
}
