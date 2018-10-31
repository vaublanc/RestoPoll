import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Constants } from 'src/app/shared/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('api/users/?lastName=Neymar', {headers: Constants.httpHeaderForLoading});
  }
}
