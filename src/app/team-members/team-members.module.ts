import { TeamMemberService } from './shared/team-member.service';
import { TeamMembersRoutingModule } from './team-members-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMemberListComponent } from './team-member-list/team-member-list.component';
import { MatCheckboxModule,
    MatTabsModule,
    MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

const MatModule = [
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
  ];

@NgModule({
    declarations: [
        TeamMemberListComponent
    ],
    imports: [
        CommonModule,
        TeamMembersRoutingModule,
        MatModule,
        FormsModule
    ],
    exports: [
        TeamMemberListComponent
    ],
    providers: [
        TeamMemberService,
    ],
})
export class TeamMembersModule {}
