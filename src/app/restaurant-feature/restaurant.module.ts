import { RestaurantComponent } from './restaurant/restaurant.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantService } from './shared/restaurant.service';

@NgModule({
    declarations: [ RestaurantComponent ],
    imports: [
        CommonModule,
        RestaurantRoutingModule,
    ],
    exports: [ RestaurantComponent ],
    providers: [
        RestaurantService
    ],
})
export class RestaurantModule {}
