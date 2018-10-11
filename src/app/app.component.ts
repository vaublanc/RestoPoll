import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Globals } from './core/globals/globals';
import { Constants } from './shared/constants';
import { HttpStatusService } from './core/loader/http-status.service';
import { startWith, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  homePageTitle = Constants.homePageTitle;

  // Boolean that controls the visibility of the global loader
  isLoaded: boolean;

  constructor(
    public globals: Globals,
    public httpStatus: HttpStatusService
  ) {}

  ngOnInit() {
    // this boolean controls the visibility of the "back to home page" button, that we obviously don't want to display on the home page.
    this.globals.isHomePage = true;
  }

  // I faced some issues with the global loader. If i update "isLoaded" on the ngOnInit
  // I got the error "ExpressionChangedAfterItHasBeenCheckedError". More information about this :
  // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
  // So, in order to correct this error, we use that little trick : we delay the affectation to the next cycle
  ngAfterViewInit() {
    this.httpStatus.isLoaded.pipe(
      startWith(null),
      delay(0),
      tap(isLoaded => this.isLoaded = isLoaded)
    ).subscribe();
  }
}
