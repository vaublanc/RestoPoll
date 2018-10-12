import { Component, OnInit, Input } from '@angular/core';
import { TeamMemberService } from '../shared/team-member.service';
import { TeamMember } from '../shared/teamMember';
import { SelectionModel } from '@angular/cdk/collections';
import { Globals } from 'src/app/core/globals/globals';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.scss']
})
export class TeamMemberListComponent implements OnInit {

  @Input() teamMembers: TeamMember[] = [];
  @Input() isTeamMemberPage: boolean;
  displayedColumns = ['select', 'firstName', 'lastName'];
  selection = new SelectionModel<TeamMember>(true, []);
  currentGroup: string;

  constructor(
    private teamMemberService: TeamMemberService,
    public globals: Globals,
  ) { }

  ngOnInit() {
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
  }

  removeTeamMembers(): void {
    this.selection.selected.forEach(
      member => this.teamMemberService.removeTeamMembers(member).subscribe(
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
