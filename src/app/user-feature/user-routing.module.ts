import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const teamRoutes: Routes = [
    {path: '', redirectTo: 'home-page', pathMatch: 'full'},
    {path: 'home-page', component: HomePageComponent}
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(teamRoutes)
   ],
  exports: [
      RouterModule
  ],
})
export class UserRoutingModule { }
