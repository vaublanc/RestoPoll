import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ExceptionService } from '../../../core/exceptions/exception.service';
import { Constants } from '../../../shared/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeamService {

  private teamsUrl = 'api/teams';

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService,
  ) {}

  getTeam(id: string): Observable<Team> {
    const urlGet = `${this.teamsUrl}/${id}`;
    return this.http.get<Team>(urlGet, {headers: Constants.httpHeaderForLoading}).pipe(
      catchError(this.exceptionService.handleError<Team>(`getHero id=${id}`))
    );
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl, {headers: Constants.httpHeaderForLoading})
    .pipe(
      catchError(this.exceptionService.handleError('getTeams', []))
    );
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, team, httpOptions)
      .pipe(
        catchError(this.exceptionService.handleError<Team>('addTeam'))
      );
  }

  updateTeam(team: Team): Observable<Team> {
    return this.http.put<Team>(this.teamsUrl, team, httpOptions).pipe(
      catchError(this.exceptionService.handleError<Team>('updateTeam'))
    );
  }

  deleteTeam(id: string): Observable<string> {
    const urlDelete = `${this.teamsUrl}/${id}`;

    return this.http.delete<Team>(urlDelete, httpOptions).pipe(
      map(() => id),
      catchError(this.exceptionService.handleError<string>('deleteTeam'))
    );
  }

  getPollTeamName(teamId: string): Observable<string> {
    return this.http.get<Team>(`${this.teamsUrl}/${teamId}`).pipe(
      map(teamReturned => teamReturned.name),
      catchError(this.exceptionService.handleError<string>('getPollTeamName'))
    );
  }


}
