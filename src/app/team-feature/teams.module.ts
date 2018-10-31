import { SharedModule } from './../shared/shared.module';
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
    MatTableModule} from '@angular/material';

const MatModule = [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatCheckboxModule,
  ];

@NgModule({
    declarations: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent,
        TeamMemberListComponent,
    ],
    imports: [
        CommonModule,
        TeamsRoutingModule,
        MatModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
        TeamComponent,
        TeamListComponent,
        TeamMemberListComponent,
    ],
    providers: [
        TeamService,
    ],
    entryComponents: [
        DialogTeamCreationComponent,
        DialogTeamSuppressionComponent,
    ],
})
export class TeamsModule {}
