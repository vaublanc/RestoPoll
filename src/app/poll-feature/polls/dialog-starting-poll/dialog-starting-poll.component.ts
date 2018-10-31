import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Poll } from '../../polls/shared/poll';
import { TeamMember } from 'src/app/team-feature/team-members/shared/teamMember';

@Component({
  selector: 'app-dialog-starting-poll',
  templateUrl: './dialog-starting-poll.component.html',
  styleUrls: ['./dialog-starting-poll.component.scss']
})
export class DialogStartingPollComponent implements OnInit {

  teamMembers: TeamMember[] = [];
  selectedMembers: TeamMember[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogStartingPollComponent>,
    @Inject(MAT_DIALOG_DATA) public startingPoll: Poll) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit(): void {

    }

    teamMembersSelectedEventHandler($event: any) {
      this.selectedMembers = $event;
    }

}
