import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Globals } from './core/globals/globals';
import { Constants } from './core/globals/constants';
import { HttpStatusService } from './core/services/http-status.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  homePageTitle = Constants.homePageTitle;
  httpActivity: number;

  constructor(
    public globals: Globals,
    private httpStatus: HttpStatusService,
    private cdRef: ChangeDetectorRef
  ) {
    this.httpStatus.getHttpStatus().subscribe((nbRequestInFlight: number) => (this.httpActivity = nbRequestInFlight));
  }

  ngOnInit() {
    this.globals.isHomePage = true;
  }
}
