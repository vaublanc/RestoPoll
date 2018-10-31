import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './teams/team/team.component';

const teamRoutes: Routes = [
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
    providers: [],
})
export class TeamsRoutingModule {}
