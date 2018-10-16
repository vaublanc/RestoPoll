import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './teams/team/team.component';
import { OngoingPollsComponent } from './polls/ongoing-polls/ongoing-polls.component';

const teamRoutes: Routes = [
    {path: 'home-page', component: HomePageComponent},
    {path: 'team/:id', component: TeamComponent},
    {path: 'ongoingPoll/:id', component: OngoingPollsComponent},
  ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(teamRoutes)
     ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class TeamsRoutingModule {}
