import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OngoingPollsComponent } from './polls/ongoing-polls/ongoing-polls.component';

const teamRoutes: Routes = [
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
export class PollRoutingModule {}
