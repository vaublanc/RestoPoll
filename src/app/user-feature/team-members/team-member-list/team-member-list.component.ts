import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TeamMember } from '../shared/teamMember';
import { SelectionModel } from '@angular/cdk/collections';
import { Globals } from 'src/app/core/globals/globals';
import { TeamService } from '../../teams/shared/team.service';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.scss']
})
export class TeamMemberListComponent {

  @Input() teamMembers: TeamMember[] = [];
  @Input() isTeamMemberPage: boolean;
  displayedColumns = ['select', 'firstName', 'lastName'];
  selection = new SelectionModel<TeamMember>(true, []);
  currentGroup: string;
  @Output() teamMembersSelected = new EventEmitter<TeamMember[]>();

  constructor(
    private teamService: TeamService,
    public globals: Globals,
  ) {
  }

  onSelectionChanged(row: TeamMember) {
    this.selection.toggle(row);
    this.teamMembersSelected.emit(this.selection.selected);
  }

  // method to know if all the checkboxes are selected, in order to know whether the master checkbox is checked or not
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.teamMembers.length;
    return numSelected === numRows;
  }

  // if the master checkbox is checked, then we check the other checkboxes
  // if the master checkbox is unchecked, then we uncheck the other checkboxes
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.teamMembers.forEach(row => this.selection.select(row));
    this.teamMembersSelected.emit(this.selection.selected);
  }

  removeTeamMembers(): void {
    this.selection.selected.forEach(
      member => this.teamService.removeTeamMembers(member).subscribe(
        memberRemoved => {
          // mat-table works with reference of object, so we have to change it if we want the view to be notified
          this.teamMembers.splice(this.teamMembers.indexOf(memberRemoved), 1);
          this.teamMembers = Object.assign([], this.teamMembers);
        }
      )
      );
      this.selection.clear();
  }

}
