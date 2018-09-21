import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, finalize } from '../../../../node_modules/rxjs/operators';
import { ExceptionService } from './exception.service';
import { Globals } from '../globals/globals';
import { HttpStatusService } from './http-status.service';


@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService {

  constructor(
    private globals: Globals,
    private exceptionService: ExceptionService,
    private httpStatus: HttpStatusService
  ) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('loading')) {
      this.httpStatus.incHttpRequestNumber();
    }
    return next.handle(req).pipe(
      catchError (error => Observable.throw(error)),
      finalize (() => {
        if (req.headers.get('loading')) {
          this.httpStatus.decHttpRequestNumber();
        }
      })
    );
  }
}
