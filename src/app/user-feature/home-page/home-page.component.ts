import { Globals } from './../../core/globals/globals';
import { User } from './../shared/user';
import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import { OngoingPoll } from '../polls/shared/ongoing-poll';
import { Poll } from '../polls/shared/poll';
import { PollService } from '../polls/shared/poll.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  ongoingPolls: OngoingPoll[];
  currentUser: Observable<User[]>;
  polls: Poll[];

  constructor(
    private pollService: PollService,
    private globals: Globals,
    public navigationService: NavigationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    // we don't have an authentication service yet. So for now, we simply get the first user as the currentUser
    // currentUser is an array because we have used a filter to get the user,
    // so even if we are expected one result, the function returns an array.
    this.currentUser = this.userService.getUser();

    this.globals.title = Constants.homePageTitle;
    this.globals.isHomePage = true;
    this.getOngoingPolls();
  }

  getOngoingPolls(): void {
    this.pollService.getOngoingPolls().subscribe(
      pollsReturned => this.ongoingPolls = pollsReturned
    );
  }
}
