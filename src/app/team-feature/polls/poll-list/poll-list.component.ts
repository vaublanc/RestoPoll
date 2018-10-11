import { OptionService } from './../../options/shared/option.service';
import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../shared/poll';
import { Option } from '../../options/shared/option';
import { NatureEnum } from 'src/app/shared/nature-enum';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  @Input() polls: Poll[];
  currentOptions: Option[];
  displayedColumns = ['select', 'name'];
  selection = new SelectionModel<Option>(true, []);

  constructor(
    private optionService: OptionService
  ) { }

  ngOnInit() {
  }

  getOptions(poll: Poll): void {
    this.optionService.getOptions(poll).subscribe(
      optionsReturned => {
        this.currentOptions = optionsReturned;
        this.currentOptions.forEach(row => this.selection.select(row));
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

}
