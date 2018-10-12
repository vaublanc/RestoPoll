import { TeamService } from './../../teams/shared/team.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'getPollTeamName',
  pure: true
})
export class GetPollTeamNamePipe implements PipeTransform {

  teamName: string;

  constructor(
    private teamService: TeamService
  ) {}

  transform(teamId: string): Observable<string> {
    return this.teamService.getPollTeamName(teamId);
  }

}
