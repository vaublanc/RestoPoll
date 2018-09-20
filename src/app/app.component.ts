import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from './title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private location: Location,
    public title: Title
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
