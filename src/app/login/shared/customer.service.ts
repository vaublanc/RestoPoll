import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable()
export class CustomerService {

    setToken(): void {
        localStorage.setItem(TOKEN, 'token');
    }

    isLogged() {
        return localStorage.getItem(TOKEN) != null;
    }
}
