import { Component, OnInit } from '@angular/core';
import { Poll } from '../polls/shared/poll';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  favoritesPolls: Poll[];

  constructor() { }

  ngOnInit() {
  }

}
