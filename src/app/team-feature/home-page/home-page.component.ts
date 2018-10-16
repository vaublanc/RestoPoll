import { Globals } from './../../core/globals/globals';
import { PollService } from './../polls/shared/poll.service';
import { Component, OnInit } from '@angular/core';
import { Poll } from '../polls/shared/poll';
import { Constants } from 'src/app/shared/constants';
import { OngoingPoll } from '../polls/shared/ongoing-poll';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  favoritePolls: Poll[];
  ongoingPolls: OngoingPoll[];

  constructor(
    private pollService: PollService,
    private globals: Globals,
    public navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.globals.title = Constants.homePageTitle;
    this.globals.isHomePage = true;
    this.getFavoritePolls();
    this.getOngoingPolls();
  }

  getFavoritePolls(): void {
    this.pollService.getFavoritePolls().subscribe(
      pollsReturned => this.favoritePolls = pollsReturned
    );
  }

  getOngoingPolls(): void {
    this.pollService.getOngoingPolls().subscribe(
      pollsReturned => this.ongoingPolls = pollsReturned
    );
  }
}
