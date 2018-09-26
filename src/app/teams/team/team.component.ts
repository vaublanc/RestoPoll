import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Team } from '../shared/team';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../core/globals/globals';
import { TeamService } from '../shared/team.service';
import { NavigationService } from '../../core/services/navigation.service';
import { MatDialog } from '@angular/material';
import { DialogTeamSuppressionComponent } from '../dialog-team-suppression/dialog-team-suppression.component';
import { flatMap, startWith, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { TeamMember } from '../../team-member/shared/teamMember';
import { TeamMemberService } from '../../team-member/shared/team-member.service';
import { HttpStatusService } from '../../core/services/http-status.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  currentTeam: Team;
  teamMembers: TeamMember[] = [];
  isLoaded: boolean;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public globals: Globals,
    private teamService: TeamService,
    private navigationService: NavigationService,
    private teamMemberService: TeamMemberService,
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
}
