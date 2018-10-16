import { TeamService } from './../../teams/shared/team.service';
import { OngoingPoll } from './ongoing-poll';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from './poll';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../../shared/constants';
import { Team } from '../../teams/shared/team';
import { catchError, map } from 'rxjs/operators';
import { ExceptionService } from '../../../core/exceptions/exception.service';

@Injectable()
export class PollService {
  [x: string]: any;

  pollsUrl = 'api/polls';
  ongoingPollUrl = 'api/ongoingPolls';

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService,
    private teamService: TeamService
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

  createOngoingPoll(ongoingPoll: OngoingPoll): Observable<string> {
    return this.http.post<OngoingPoll>(this.ongoingPollUrl, ongoingPoll).pipe(
      map(ongoingPollCreated => ongoingPollCreated.id),
      catchError(this.exceptionService.handleError<string>('createOngoingPoll'))
    );
  }

  getOngoingPoll(ongoingPollId: string): Observable<OngoingPoll> {
    return this.http.get<OngoingPoll>(`${this.ongoingPollUrl}/${ongoingPollId}`, {headers: Constants.httpHeaderForLoading}).pipe(
      catchError(this.exceptionService.handleError<OngoingPoll>('GetOngoingPoll'))
    );
  }

  getOngoingPolls(): Observable<OngoingPoll[]> {
    return this.http.get<OngoingPoll[]>(this.ongoingPollUrl, {headers: Constants.httpHeaderForLoading}).pipe(
      catchError(this.exceptionService.handleError<OngoingPoll[]>('GetOngoingPolls'))
    );
  }

  getOngoingPollTeamId(pollId: string): Observable<string> {
    return this.http.get<Poll>(`${this.pollsUrl}/${pollId}`).pipe(
      map(pollReturned => pollReturned.teamId),
      catchError(this.exceptionService.handleError<string>('GetPollTeamid'))
    );
  }
}
