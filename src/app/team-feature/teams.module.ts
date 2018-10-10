import { TeamMemberService } from './team-members/shared/team-member.service';
import { TeamMemberListComponent } from './team-members/team-member-list/team-member-list.component';
import { FormsModule } from '@angular/forms';
import { TeamService } from './teams/shared/team.service';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamComponent } from './teams/team/team.component';
import { DialogTeamSuppressionComponent } from './teams/dialog-team-suppression/dialog-team-suppression.component';
import { DialogTeamCreationComponent } from './teams/dialog-team-creation/dialog-team-creation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule} from '@angular/material';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { PollService } from './polls/shared/poll.service';
import { OptionService } from './options/shared/option.service';

const MatModule = [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatExpansionModule
  ];

@NgModule({
    declarations: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent,
        TeamMemberListComponent,
        PollListComponent,
    ],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        MatModule,
        FormsModule,
    ],
    exports: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent,
        TeamMemberListComponent,
        PollListComponent,
    ],
    providers: [
        TeamService,
        TeamMemberService,
        PollService,
        OptionService
    ],
    entryComponents: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent
    ],
})
export class TeamsModule {}
