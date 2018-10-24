import { ExceptionService } from './../../core/exceptions/exception.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService
  ) { }

  login(email: string): Observable<User> {
    return this.http.get<User>(`api/users/${email}`).pipe(
      catchError(this.exceptionService.handleError<User>('login'))
    );
  }
}
