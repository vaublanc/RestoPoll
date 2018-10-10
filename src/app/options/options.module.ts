import { RestaurantService } from './restaurants/restaurant.service';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsRoutingModule } from './options-routing.module';
import { } from '@angular/material';
import { FormsModule } from '@angular/forms';

const MatModule = [
  ];

@NgModule({
    declarations: [
        RestaurantComponent
    ],
    imports: [
        CommonModule,
        OptionsRoutingModule,
        MatModule,
    ],
    exports: [
        RestaurantComponent
    ],
    providers: [
        RestaurantService
    ],
})
export class OptionsModule {}
