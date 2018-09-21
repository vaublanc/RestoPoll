import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    public router: Router
  ) {}

  navigate(url: string, param?: string): void {
    if (param) {
      this.router.navigate([url + param]);
    } else {
      this.router.navigate([url]);
    }
  }
}
