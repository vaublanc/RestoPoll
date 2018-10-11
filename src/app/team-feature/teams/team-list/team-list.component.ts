import { TranslateService } from './../../../core/translation/translate.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Team } from '../shared/team';
import { MatDialog } from '@angular/material';
import { DialogTeamCreationComponent } from '../dialog-team-creation/dialog-team-creation.component';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { Globals } from '../../../core/globals/globals';
import { TeamService } from '../shared/team.service';
import { NavigationService } from '../../../core/navigation/navigation.service';
import { Constants } from '../../../shared/constants';
import { HttpStatusService } from '../../../core/loader/http-status.service';

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
    private translateService: TranslateService
  ) {
    this.globals.isHomePage = true;
  }

  ngOnInit() {
    this.getTeams();
    this.globals.title = Constants.homePageTitle;
  }

  ngOnDestroy() {
    // controls the visibility of the "back to home page button"
    this.globals.isHomePage = false;
  }

  // opens a modal when the user click on the "add team" button
  openDialog(): void {
    // we immediatly create a new team with a blank name team
    this.newTeam = {
      id: UUID.UUID(),
      name: ''
    };

    // we pass the new created team to the modal
    const dialogRef = this.dialog.open(DialogTeamCreationComponent, {
      width: '450px',
      data: this.newTeam
    });

    // after the user has closed the tab, if he added a name, we take back the team previously created
    // and then we add it to the current list. Otherwise, we do nothing
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
        this.addTeamButtonName = '\+';
        if (this.teams.length === 0) {
          // the text on the "add team button" change whether the list of teams is empty or not
          this.addTeamButtonName = this.translateService.data.TeamFeature['CreateNewTeam'];
          }
      });
  }

  addTeam(teamToSave: Team): void {
    this.teamService.addTeam(teamToSave)
      .subscribe(teamCreated => this.navigationService.navigate('/team/', teamCreated.id));
  }
}
