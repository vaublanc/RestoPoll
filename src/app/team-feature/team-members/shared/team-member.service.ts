import { Injectable } from '@angular/core';
import { TeamMember } from './teamMember';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ExceptionService } from '../../../core/exceptions/exception.service';
import { Team } from '../../teams/shared/team';
import { Constants } from '../../../shared/constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TeamMemberService {

  private teamsUrl = 'api/teamMembers';

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService,
  ) { }

  getTeamMembers(team: Team): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(`${this.teamsUrl}/?teamId=${team.id}`, {headers: Constants.httpHeaderForLoading}).pipe(
      catchError(this.exceptionService.handleError('GetTeamMembers', []))
    );
  }

  removeTeamMembers(member: TeamMember): Observable<TeamMember> {
    const deleteUrl = `${this.teamsUrl}/${member.id}`;
    return this.http.delete(deleteUrl, httpOptions).pipe(
      map(() => member),
      catchError(this.exceptionService.handleError<TeamMember>('deleteTeamMember'))
    );
  }
}
