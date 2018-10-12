import { Globals } from './../../core/globals/globals';
import { PollService } from './../polls/shared/poll.service';
import { Component, OnInit } from '@angular/core';
import { Poll } from '../polls/shared/poll';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  favoritePolls: Poll[];

  constructor(
    private pollService: PollService,
    private globals: Globals,
  ) { }

  ngOnInit() {
    this.globals.title = Constants.homePageTitle;
    this.globals.isHomePage = true;
    this.getFavoritePolls();
  }

  getFavoritePolls(): void {
    this.pollService.getFavoritePolls().subscribe(
      pollsReturned => this.favoritePolls = pollsReturned
    );
  }
}
