import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Option } from '../shared/option';
import { UUID } from 'angular2-uuid';
import { Poll } from '../../shared/poll';

@Component({
  selector: 'app-dialog-add-option',
  templateUrl: './dialog-add-option.component.html',
  styleUrls: ['./dialog-add-option.component.scss']
})
export class DialogAddOptionComponent implements OnInit {

  option: Option;

  constructor(
    public dialogRef: MatDialogRef<DialogAddOptionComponent>,
    @Inject(MAT_DIALOG_DATA) public poll: Poll) {}

    ngOnInit() {
      this.option = new Option();
      this.option.id = UUID.UUID();
      this.option.pollId = this.poll.id;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
