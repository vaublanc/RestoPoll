import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team';
import { ActivatedRoute } from '@angular/router';
import { Title } from '../../title';
import { TeamService } from '../shared/team.service';
import { NavigationService } from '../../core/navigation.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { DialogTeamSuppressionComponent } from '../dialog-team-suppression/dialog-team-suppression.component';
import { flatMap, map, tap } from '../../../../node_modules/rxjs/operators';
import { of } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  currentTeam: Team;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private title: Title,
    private teamService: TeamService,
    private navigationService: NavigationService
  ) { }

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
      this.title.name = 'Groupe ' + this.currentTeam.name;
    });
  }

  save(): void {
    this.teamService.updateTeam(this.currentTeam)
      .subscribe(() => this.title.name = 'Groupe ' + this.currentTeam.name);
  }
}
