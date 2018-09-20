import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'teams/:id', component: TeamsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routedComponents = [
  HomePageComponent,
  TeamsComponent
];
