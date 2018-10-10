import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantService } from './shared/restaurant.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RestaurantRoutingModule,
    ],
    exports: [],
    providers: [
        RestaurantService
    ],
})
export class RestaurantModule {}
