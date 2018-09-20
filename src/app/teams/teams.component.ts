import { Component, OnInit } from '@angular/core';
import { Team } from '../_entities/team';
import { ActivatedRoute } from '@angular/router';
import { Title } from '../title';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  currentTeam: Team;

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.getTeam();

    this.title.name = 'Groupe ' + this.currentTeam.name;
  }

  getTeam(): void {
    this.currentTeam = {
      id: this.route.snapshot.paramMap.get('id'),
      name: this.route.snapshot.queryParamMap.get('name')
    };
  }
}
