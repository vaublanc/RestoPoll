import { TeamMemberService } from './../../team-members/shared/team-member.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Poll } from '../../polls/shared/poll';
import { TeamMember } from '../../team-members/shared/teamMember';

@Component({
  selector: 'app-dialog-starting-poll',
  templateUrl: './dialog-starting-poll.component.html',
  styleUrls: ['./dialog-starting-poll.component.scss']
})
export class DialogStartingPollComponent implements OnInit {

  teamMembers: TeamMember[] = [];
  selectedMembers: TeamMember[] = [];

  constructor(
    private teamMemberService: TeamMemberService,
    public dialogRef: MatDialogRef<DialogStartingPollComponent>,
    @Inject(MAT_DIALOG_DATA) public startingPoll: Poll) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit(): void {
      this.teamMemberService.getTeamMembers(this.startingPoll.teamId).subscribe(
        teamMembersReturned => this.teamMembers = teamMembersReturned
      );
    }

    teamMembersSelectedEventHandler($event: any) {
      this.selectedMembers = $event;
    }

}
