import { Restaurant } from './../shared/restaurant';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Option } from '../shared/option';
import { NatureEnum } from 'src/app/shared/nature-enum';
import { Poll } from '../../polls/shared/poll';
import { UUID } from 'angular2-uuid';
import { Movie } from '../shared/movie';

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
      switch (this.poll.nature) {
        case NatureEnum.Restaurant:
          this.option = new Restaurant();
          break;

        case NatureEnum.Movie:
          this.option = new Movie();
          break;

        default:
          break;
      }

      this.initializeOption();
    }

    initializeOption(): void {
      this.option.id = UUID.UUID();
      this.option.pollId = this.poll.id;
    }



    onNoClick(): void {
      this.dialogRef.close();
    }

}
