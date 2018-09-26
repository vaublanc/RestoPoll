import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../shared/poll';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  @Input() polls: Poll[];

  constructor() { }

  ngOnInit() {
  }

}
