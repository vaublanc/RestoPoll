import { NatureEnum } from './../../../shared/nature-enum';
import { DialogAddOptionComponent } from './../../options/dialog-add-option/dialog-add-option.component';
import { OngoingPoll } from './../shared/ongoing-poll';
import { NavigationService } from './../../../core/navigation/navigation.service';
import { OptionService } from './../../options/shared/option.service';
import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../shared/poll';
import { Option } from '../../options/shared/option';
import { SelectionModel } from '@angular/cdk/collections';
import { Globals } from 'src/app/core/globals/globals';
import { MatDialog } from '@angular/material';
import { DialogStartingPollComponent } from '../dialog-starting-poll/dialog-starting-poll.component';
import { PollService } from '../shared/poll.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  @Input() polls: Poll[];
  currentOptions: Option[] = [];
  displayedColumns = ['select', 'name'];
  selection = new SelectionModel<Option>(true, []);
  ongoingPoll: OngoingPoll;

  constructor(
    public dialog: MatDialog,
    private optionService: OptionService,
    public globals: Globals,
    private navigationService: NavigationService,
    private pollService: PollService,
  ) { }

  ngOnInit() {

  }

  getOptions(poll: Poll): void {
    this.optionService.getOptions(poll).subscribe(
      optionsReturned => {
        this.currentOptions = optionsReturned;
        if (optionsReturned) {
          this.currentOptions.forEach(row => this.selection.select(row));
        }
      });
  }

  emptyOptions(): void {
    this.currentOptions = [];
    this.selection.clear();
  }

  // method to know if all the checkboxes are selected, in order to know whether the master checkbox is checked or not
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.currentOptions.length;
    return numSelected === numRows;
  }

  // if the master checkbox is checked, then we check the other checkboxes
  // if the master checkbox is unchecked, then we uncheck the other checkboxes
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.currentOptions.forEach(row => this.selection.select(row));
  }

  openDialogStartingPoll(poll: Poll): void {
    const dialogRef = this.dialog.open(DialogStartingPollComponent, {
      data: poll
    });

    dialogRef.afterClosed().subscribe(
      selectedMembers => {
        if (selectedMembers) {
          const ongoingPoll = new OngoingPoll(poll, this.selection.selected, selectedMembers);

          this.pollService.createOngoingPoll(ongoingPoll).subscribe(
            id => this.navigationService.navigate('/ongoingPoll/', id)
          );
        }
      }
    );
  }

  OpenDialogAddOption(poll: Poll): void {
    const dialogRef = this.dialog.open(DialogAddOptionComponent, {
      data: poll,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(
      optionReturned => {
        if (optionReturned) {
          this.optionService.addNewOption(optionReturned, poll.nature).subscribe(
            optionCreated => {
              this.currentOptions.push(optionCreated);
              this.currentOptions = Object.assign([], this.currentOptions);
            }
          );
        }
      }
    );
  }
}
