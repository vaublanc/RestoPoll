import { OngoingPollsComponent } from './polls/ongoing-polls/ongoing-polls.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './teams/team/team.component';

const teamRoutes: Routes = [
    {path: '', redirectTo: 'home-page', pathMatch: 'full'},
    {path: 'home-page', component: HomePageComponent},
    {path: 'ongoingPoll/:id', component: OngoingPollsComponent},
    {path: 'team/:id', component: TeamComponent},
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
