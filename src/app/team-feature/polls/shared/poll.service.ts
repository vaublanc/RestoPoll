import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../../shared/constants';
import { Team } from '../../teams/shared/team';
import { catchError } from 'rxjs/operators';
import { ExceptionService } from '../../../core/exceptions/exception.service';

@Injectable()
export class PollService {

  pollsUrl = 'api/polls';

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService
  ) { }

  getPolls(team: Team): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${this.pollsUrl}/?teamId=${team.id}`, {headers: Constants.httpHeaderForLoading}).pipe(
      catchError(this.exceptionService.handleError<Poll[]>('getPolls')
    ));
  }

  getFavoritePolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${this.pollsUrl}/?isFavorite=true`, {headers: Constants.httpHeaderForLoading}).pipe(
      catchError(this.exceptionService.handleError<Poll[]>('getPolls')
    ));
  }
}
