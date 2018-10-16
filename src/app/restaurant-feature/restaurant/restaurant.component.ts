import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from 'src/app/team-feature/options/shared/restaurant';
import { Globals } from 'src/app/core/globals/globals';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  currentRestaurant: Restaurant;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private globals: Globals
  ) { }

  ngOnInit() {
    this.getRestaurant();
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  }

  getRestaurant(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.restaurantService.getRestaurant(id).subscribe(
      restaurantReturned => {
        this.currentRestaurant = restaurantReturned;
        this.globals.title = restaurantReturned.name;
      }
    );
  }
}
