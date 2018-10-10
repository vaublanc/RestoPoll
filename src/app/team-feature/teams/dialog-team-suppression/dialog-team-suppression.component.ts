import { Component, Inject } from '@angular/core';
import { Team } from '../shared/team';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-team-suppression',
  templateUrl: './dialog-team-suppression.component.html',
  styleUrls: ['./dialog-team-suppression.component.scss']
})
export class DialogTeamSuppressionComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogTeamSuppressionComponent>,
    @Inject(MAT_DIALOG_DATA) public deletedTeam: Team) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
