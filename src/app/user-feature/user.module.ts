import { DialogAddOptionComponent } from './polls/options/dialog-add-option/dialog-add-option.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDialogModule} from '@angular/material';
import { UserService } from './shared/user.service';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { DialogStartingPollComponent } from './polls/dialog-starting-poll/dialog-starting-poll.component';
import { OngoingPollsComponent } from './polls/ongoing-polls/ongoing-polls.component';
import { PollService } from './polls/shared/poll.service';
import { OptionService } from './polls/options/shared/option.service';
import { DialogTeamSuppressionComponent } from './teams/dialog-team-suppression/dialog-team-suppression.component';
import { DialogTeamCreationComponent } from './teams/dialog-team-creation/dialog-team-creation.component';
import { TeamService } from './teams/shared/team.service';
import { TeamMemberListComponent } from './team-members/team-member-list/team-member-list.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamComponent } from './teams/team/team.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const MatModule = [
  MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatSelectModule,
  MatInputModule,
];

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatModule,
    FormsModule,
    SharedModule,
    NgxChartsModule
  ],
  declarations: [
    HomePageComponent,
    PollListComponent,
    DialogStartingPollComponent,
    OngoingPollsComponent,
    DialogAddOptionComponent,
    DialogTeamCreationComponent,
    DialogTeamSuppressionComponent,
    TeamComponent,
    TeamListComponent,
    TeamMemberListComponent,
  ],
  exports: [
    HomePageComponent,
    PollListComponent,
    DialogStartingPollComponent,
    OngoingPollsComponent,
    DialogAddOptionComponent,
    DialogTeamCreationComponent,
    DialogTeamSuppressionComponent,
    TeamComponent,
    TeamListComponent,
    TeamMemberListComponent,
  ],
  providers: [
    UserService,
    PollService,
    OptionService,
    TeamService
  ],
  entryComponents: [
    DialogStartingPollComponent,
    DialogAddOptionComponent,
    DialogTeamCreationComponent,
    DialogTeamSuppressionComponent,
  ]
})
export class UserModule { }
