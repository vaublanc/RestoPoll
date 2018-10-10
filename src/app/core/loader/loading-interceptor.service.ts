import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { HttpStatusService } from './http-status.service';


@Injectable()
export class LoadingInterceptorService {

  private requests: HttpRequest<any>[] = [];

  constructor(
    private httpStatus: HttpStatusService
  ) {}

  // the interceptor intercept all http request before they are executed. This allow us to handle the global loader.
  // Indeed, when a request is intercepted, we push it on a array. And when the request is handled, we remove it from the array.
  // Then we check whether the array is empty or not.
  // At each of these steps, we update the global boolean that handle the visibility of the global loader (with the next).

  removeRequest(req: HttpRequest<any>) {
    const reqIndex = this.requests.indexOf(req);
    if (reqIndex >= 0) {
      this.requests.splice(reqIndex, 1);
    }
    this.httpStatus.isLoaded.next(this.requests.length === 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('loading') === 'true') {
      this.requests.push(req);
      this.httpStatus.isLoaded.next(false);
    }

    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      finalize(() => {
        if (req.headers.get('loading') === 'true') {
          this.removeRequest(req);
        }
      })
    );

    // return Observable.create(observer => {
    //   const subscription = this.subscribeToNext(req, next, observer);
    //   return () => {
    //     this.removeRequest(req);
    //     subscription.unsubscribe();
    //   };
    // });
  }

  // subscribeToNext(req: HttpRequest<any>, next: HttpHandler, observer): Subscription {
  //   return next.handle(req).subscribe(
  //     event => {
  //       if (event instanceof HttpResponse) {
  //         this.removeRequest(req);
  //         observer.next(event);
  //       }
  //     },
  //     err => { this.removeRequest(req); observer.error(err); },
  //     () => { this.removeRequest(req); observer.complete(); }
  //   );
  // }
}
