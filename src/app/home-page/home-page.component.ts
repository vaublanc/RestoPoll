import { Component, OnInit, Input } from '@angular/core';
import {Team} from '../_entities/team';
import {MatDialog} from '@angular/material';
import { DialogTeamCreationComponent } from '../dialog-team-creation/dialog-team-creation.component';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { Title } from '../title';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  teams: Team[] = [];
  newTeam: Team;
  addTeamButtonName: string;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    if (this.teams.length === 0) {
      this.addTeamButtonName = 'Créer mon premier groupe';
      } else {
        this.addTeamButtonName = '\+';
      }

      this.title.name = 'Où allez vous manger aujourd\'hui ?';
  }


  openDialog(): void {
    this.newTeam = {
      id: UUID.UUID(),
      name: ''
    };

    const dialogRef = this.dialog.open(DialogTeamCreationComponent, {
      width: '450px',
      data: {newTeam: this.newTeam}
    });

    dialogRef.afterClosed().subscribe(teamCreated => {
      if (teamCreated && teamCreated.name) {
        this.navigate(teamCreated.id, teamCreated.name);
      }
    });
  }

  // navigate(team: Team): void {
  //   this.router.navigate(['/teams/' + team.id], {queryParams: {team.name}});
  // }

  navigate(id: string, name: string): void {
    this.router.navigate(['/teams/' + id], {queryParams: {name}});
  }
}
