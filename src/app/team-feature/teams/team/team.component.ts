import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../../core/globals/globals';
import { TeamService } from '../shared/team.service';
import { NavigationService } from '../../../core/navigation/navigation.service';
import { MatDialog } from '@angular/material';
import { DialogTeamSuppressionComponent } from '../dialog-team-suppression/dialog-team-suppression.component';
import { flatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TeamMember } from '../../team-members/shared/teamMember';
import { TeamMemberService } from '../../team-members/shared/team-member.service';
import { PollService } from '../../polls/shared/poll.service';
import { Poll } from '../../polls/shared/poll';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  currentTeam: Team;
  teamMembers: TeamMember[] = [];
  isLoaded: boolean;
  polls: Poll[] = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public globals: Globals,
    private teamService: TeamService,
    private navigationService: NavigationService,
    private teamMemberService: TeamMemberService,
    private pollService: PollService
  ) {}

  ngOnInit() {
    this.getTeam();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogTeamSuppressionComponent, {
      width: '450px',
      data: this.currentTeam
    });

    dialogRef.afterClosed().pipe(
      flatMap(teamDeleted => {
        if (teamDeleted && teamDeleted.id) {
          return this.teamService.deleteTeam(teamDeleted.id);
        }
        return of();
      })
    ).subscribe(id => {
      if (id) {
        this.navigationService.navigate('/team-list');
      }
    });

  }

  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.teamService.getTeam(id).subscribe(teamReturned => {
      this.currentTeam = teamReturned;
      this.globals.title = 'Groupe ' + this.currentTeam.name;
      this.getTeamMembers();
      this.getPolls();
    });
  }

  save(): void {
    this.teamService.updateTeam(this.currentTeam)
      .subscribe(() => this.globals.title = 'Groupe ' + this.currentTeam.name);
  }

  getTeamMembers(): void {
    this.teamMemberService.getTeamMembers(this.currentTeam).subscribe(
      teamMembersReturned => this.teamMembers = teamMembersReturned
    );
  }

  getPolls(): void {
    this.pollService.getPolls(this.currentTeam).subscribe(
      pollsReturned => this.polls = pollsReturned
    );
  }
}
