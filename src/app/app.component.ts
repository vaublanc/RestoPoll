import { Component, OnInit, AfterViewChecked, AfterViewInit, Renderer2 } from '@angular/core';
import { Globals } from './core/globals/globals';
import { Constants } from './core/globals/constants';
import { HttpStatusService } from './core/services/http-status.service';
import { startWith, delay, tap } from '../../node_modules/rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  homePageTitle = Constants.homePageTitle;
  isLoaded: boolean;

  constructor(
    public globals: Globals,
    public httpStatus: HttpStatusService
  ) {}

  ngOnInit() {
    this.globals.isHomePage = true;
  }

  ngAfterViewInit() {
    this.httpStatus.isLoaded.pipe(
      startWith(null),
      delay(0),
      tap(isLoaded => this.isLoaded = isLoaded)
    ).subscribe();
  }
}
