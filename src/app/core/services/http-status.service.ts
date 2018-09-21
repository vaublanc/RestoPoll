import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {
  private nbRequestInFlight$: BehaviorSubject<number>;
  constructor() {
    this.nbRequestInFlight$ = new BehaviorSubject(0);
  }

  incHttpRequestNumber() {
    const increment = this.nbRequestInFlight$.value + 1;
    this.nbRequestInFlight$.next(increment);
  }

  decHttpRequestNumber() {
    const increment = this.nbRequestInFlight$.value - 1;
    this.nbRequestInFlight$.next(increment);
  }

  getHttpStatus(): Observable<number> {
    return this.nbRequestInFlight$.asObservable();
  }
}
