import { NgModule } from '@angular/core';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'restaurants/:id', component: RestaurantComponent}
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class RestaurantRoutingModule {}
