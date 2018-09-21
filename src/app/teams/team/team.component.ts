import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from '../shared/team';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../core/globals/globals';
import { TeamService } from '../shared/team.service';
import { NavigationService } from '../../core/services/navigation.service';
import { MatDialog } from '@angular/material';
import { DialogTeamSuppressionComponent } from '../dialog-team-suppression/dialog-team-suppression.component';
import { flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  currentTeam: Team;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public globals: Globals,
    private teamService: TeamService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  ngOnDestroy() {
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
    });
  }

  save(): void {
    this.teamService.updateTeam(this.currentTeam)
      .subscribe(() => this.globals.title = 'Groupe ' + this.currentTeam.name);
  }
}
