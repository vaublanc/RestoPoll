import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamComponent } from './teams/team/team.component';

const routes: Routes = [
  {path: '', redirectTo: '/team-list', pathMatch: 'full'},
  {path: 'team-list', component: TeamListComponent},
  {path: 'team/:id', component: TeamComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routedComponents = [
  TeamListComponent,
  TeamComponent
];
