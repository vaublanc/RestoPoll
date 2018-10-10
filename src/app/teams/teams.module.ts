import { PollsModule } from './../polls/polls.module';
import { TeamMembersModule } from './../team-members/team-members.module';
import { FormsModule } from '@angular/forms';
import { TeamService } from './shared/team.service';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { DialogTeamSuppressionComponent } from './dialog-team-suppression/dialog-team-suppression.component';
import { DialogTeamCreationComponent } from './dialog-team-creation/dialog-team-creation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule} from '@angular/material';

const MatModule = [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
  ];

@NgModule({
    declarations: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent,
    ],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        MatModule,
        FormsModule,
        TeamMembersModule,
        PollsModule
    ],
    exports: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent
    ],
    providers: [
        TeamService
    ],
    entryComponents: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent
    ],
})
export class TeamsModule {}
