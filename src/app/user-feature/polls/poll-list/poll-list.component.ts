import { OptionNaturesService } from './../../../core/option-natures/option-natures.service';
import { OngoingPoll } from './../shared/ongoing-poll';
import { NavigationService } from './../../../core/navigation/navigation.service';
import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { Poll } from '../shared/poll';
import { SelectionModel } from '@angular/cdk/collections';
import { Globals } from 'src/app/core/globals/globals';
import { MatDialog } from '@angular/material';
import { PollService } from '../shared/poll.service';
import { UUID } from 'angular2-uuid';
import { User } from 'src/app/user-feature/shared/user';
import { Observable } from 'rxjs';
import { Option } from '../options/shared/option';
import { OptionService } from '../options/shared/option.service';
import { DialogAddOptionComponent } from '../options/dialog-add-option/dialog-add-option.component';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})
export class PollListComponent implements OnInit {

  @Input() user: Observable<User[]>;
  currentUser: User;
  currentOptions: Option[] = [];
  displayedColumns = ['select', 'name'];
  selection = new SelectionModel<Option>(true, []);
  ongoingPoll: OngoingPoll;
  newPoll: Poll;
  natureSelected: string;
  isNewPollOpen: boolean;

  constructor(
    public dialog: MatDialog,
    private optionService: OptionService,
    public globals: Globals,
    private navigationService: NavigationService,
    private pollService: PollService,
    private optionNatureService: OptionNaturesService
  ) { }

  ngOnInit() {
    this.newPoll = new Poll;
    this.user.subscribe(
      userReturned => {
        this.currentUser = userReturned[0];
      }
    );
  }

  getOptions(poll: Poll): void {
    this.optionNatureService.getOptionNature(poll.natureId).subscribe(
      natureReturned => {
        this.optionService.getOptions(poll, natureReturned.route).subscribe(
          optionsReturned => {
            this.currentOptions = optionsReturned;
            if (optionsReturned) {
              this.currentOptions.forEach(row => this.selection.select(row));
            }
          });
      }
    );
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

  // openDialogStartingPoll(poll: Poll): void {
  //   const dialogRef = this.dialog.open(DialogStartingPollComponent, {
  //     data: poll
  //   });

  //   dialogRef.afterClosed().subscribe(
  //     selectedMembers => {
  //       if (selectedMembers) {
  //         const ongoingPoll = new OngoingPoll(poll, this.selection.selected, selectedMembers, );

  //         this.pollService.createOngoingPoll(ongoingPoll).subscribe(
  //           id => this.navigationService.navigate('/ongoingPoll/', id)
  //         );
  //       }
  //     }
  //   );
  // }

  OpenDialogAddOption(poll: Poll): void {
    const dialogRef = this.dialog.open(DialogAddOptionComponent, {
      data: poll,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(
      optionReturned => {
        if (optionReturned) {
          this.optionNatureService.getOptionNature(poll.natureId).subscribe(
            natureReturned => {
              this.optionService.addNewOption(optionReturned, natureReturned.route).subscribe(
                optionCreated => {
                  this.currentOptions.push(optionCreated);
                  this.currentOptions = Object.assign([], this.currentOptions);
                }
              );
            }
          );
        }
      }
    );
  }

  createNewPoll(): void {
    this.newPoll.id = UUID.UUID();
    this.optionNatureService.getOptionNature(this.natureSelected).subscribe(
      natureReturned => {
        this.newPoll.natureId = natureReturned.id;
        this.newPoll.natureName = natureReturned.name;
        this.currentUser.polls.push(this.newPoll);
        // on ajoute un nouveau sondage à l'utilisateur. A noter que plus tard, on voudra ajouter le sondage dans une table
        // qui ne dépend pas d'un utilisateur.
        this.pollService.addNewPoll(this.currentUser).subscribe(
          () => {
            this.currentUser.polls = Object.assign([], this.currentUser.polls);
            this.isNewPollOpen = false;
            this.newPoll = Object.assign({});
            this.natureSelected = '';
          }
        );
      }
    );
  }

  goToOptionPage(option: Option, poll: Poll): void {
    this.optionNatureService.getOptionNature(poll.natureId).subscribe(
      natureReturned => {
        this.navigationService.navigate(natureReturned.route, option.id);
      }
    );
  }
}
