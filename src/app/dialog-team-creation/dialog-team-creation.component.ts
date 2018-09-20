import { Component, Inject, Input } from '@angular/core';
import {Team} from '../_entities/team';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-team-creation',
  templateUrl: './dialog-team-creation.component.html',
  styleUrls: ['./dialog-team-creation.component.scss']
})
export class DialogTeamCreationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogTeamCreationComponent>,
    @Inject(MAT_DIALOG_DATA) public newteam: Team) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
