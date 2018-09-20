import { Component, OnInit } from '@angular/core';
import { Globals } from './core/globals';
import { Constants } from './core/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  homePageTitle = Constants.homePageTitle;

  constructor(
    public globals: Globals,
  ) { }

  ngOnInit() {
    this.globals.isHomePage = true;
  }
}
