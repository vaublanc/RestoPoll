import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../shared/poll';
import { OptionService } from '../../options/shared/option.service';
import { Restaurant } from '../../options/shared/restaurant';
import { Option } from '../../options/shared/option';
import { RestaurantService } from '../../options/restaurants/restaurant.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  @Input() polls: Poll[];
  currentOptions: Option[];

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
  }

  getOptions(poll: Poll): void {
    if (poll.nature === 'restaurant') {
      this.restaurantService.getOptions(poll).subscribe(
        optionsReturned => this.currentOptions = optionsReturned
      );
    }
  }

  emptyOptions(): void {
    this.currentOptions.splice(0, this.currentOptions.length);
  }

}
