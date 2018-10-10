import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';

const teamRoutes: Routes = [
    {path: 'team-list', component: TeamListComponent},
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
