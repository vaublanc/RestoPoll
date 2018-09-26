import { Component, OnInit, OnDestroy} from '@angular/core';
import { Team } from '../shared/team';
import { MatDialog } from '@angular/material';
import { DialogTeamCreationComponent } from '../dialog-team-creation/dialog-team-creation.component';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { Globals } from '../../core/globals/globals';
import { TeamService } from '../shared/team.service';
import { NavigationService } from '../../core/services/navigation.service';
import { Constants } from '../../core/globals/constants';
import { HttpStatusService } from '../../core/services/http-status.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit, OnDestroy {

  teams: Team[] = [];
  newTeam: Team;
  addTeamButtonName: string;
  isLoaded: boolean;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public globals: Globals,
    private teamService: TeamService,
    public navigationService: NavigationService,
    public httpStatus: HttpStatusService,
  ) {
    this.globals.isHomePage = true;
  }

  ngOnInit() {
    this.getTeams();
    this.globals.title = Constants.homePageTitle;
  }

  ngOnDestroy() {
    this.globals.isHomePage = false;
  }

  openDialog(): void {
    this.newTeam = {
      id: UUID.UUID(),
      name: ''
    };

    const dialogRef = this.dialog.open(DialogTeamCreationComponent, {
      width: '450px',
      data: this.newTeam
    });

    dialogRef.afterClosed().subscribe(teamCreated => {
      if (teamCreated && teamCreated.name) {
        this.addTeam(teamCreated);
      }
    });
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe(teamsReturned => {
        this.teams = teamsReturned;
        if (this.teams.length === 0) {
          this.addTeamButtonName = 'Créer mon premier groupe';
          } else {
            this.addTeamButtonName = '\+';
          }
      });
  }

  addTeam(teamToSave: Team): void {
    this.teamService.addTeam(teamToSave)
      .subscribe(teamCreated => this.navigationService.navigate('/team/', teamCreated.id));
  }
}
