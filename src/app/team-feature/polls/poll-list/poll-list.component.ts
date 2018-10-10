import { OptionService } from './../../options/shared/option.service';
import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../shared/poll';
import { Option } from '../../options/shared/option';
import { NatureEnum } from 'src/app/shared/nature-enum';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  @Input() polls: Poll[];
  currentOptions: Option[];

  constructor(
    private optionService: OptionService
  ) { }

  ngOnInit() {
  }

  getOptions(poll: Poll): void {
    this.optionService.getOptions(poll).subscribe(
      optionsReturned => this.currentOptions = optionsReturned);
  }

  emptyOptions(): void {
    this.currentOptions = [];
  }

}
