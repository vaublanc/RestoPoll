import { TeamListComponent } from './teams/team-list/team-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './teams/team/team.component';

const teamRoutes: Routes = [
    {path: 'home-page', component: HomePageComponent},
    {path: 'team/:id', component: TeamComponent}
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
