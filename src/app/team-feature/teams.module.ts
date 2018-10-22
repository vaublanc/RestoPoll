import { SharedModule } from './../shared/shared.module';
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
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule} from '@angular/material';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { PollService } from './polls/shared/poll.service';
import { OptionService } from './options/shared/option.service';
import { HomePageComponent } from './home-page/home-page.component';
import { DialogStartingPollComponent } from './polls/dialog-starting-poll/dialog-starting-poll.component';
import { OngoingPollsComponent } from './polls/ongoing-polls/ongoing-polls.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DialogAddOptionComponent } from './options/dialog-add-option/dialog-add-option.component';

const MatModule = [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule
  ];

@NgModule({
    declarations: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent,
        TeamMemberListComponent,
        PollListComponent,
        HomePageComponent,
        DialogStartingPollComponent,
        OngoingPollsComponent,
        DialogAddOptionComponent,
    ],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        MatModule,
        FormsModule,
        SharedModule,
        NgxChartsModule,
    ],
    exports: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent,
        TeamMemberListComponent,
        PollListComponent,
        DialogStartingPollComponent,
        OngoingPollsComponent,
        DialogAddOptionComponent
    ],
    providers: [
        TeamService,
        TeamMemberService,
        PollService,
        OptionService
    ],
    entryComponents: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        DialogStartingPollComponent,
        DialogAddOptionComponent
    ],
})
export class TeamsModule {}
