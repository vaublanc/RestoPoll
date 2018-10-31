import { RestaurantComponent } from './restaurant/restaurant.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantService } from './shared/restaurant.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ RestaurantComponent ],
    imports: [
        CommonModule,
        RestaurantRoutingModule,
        SharedModule
    ],
    exports: [ RestaurantComponent ],
    providers: [
        RestaurantService
    ],
})
export class RestaurantModule {}
