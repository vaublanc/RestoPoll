import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { DialogStartingPollComponent } from './polls/dialog-starting-poll/dialog-starting-poll.component';
import { OngoingPollsComponent } from './polls/ongoing-polls/ongoing-polls.component';
import { DialogAddOptionComponent } from './options/dialog-add-option/dialog-add-option.component';
import { PollService } from './polls/shared/poll.service';
import { OptionService } from './options/shared/option.service';
import { MatSelectModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatTableModule,
        MatDialogModule,
        MatInputModule} from '@angular/material';
import { PollRoutingModule } from './poll-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const MatModule = [
  MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatSelectModule,
  MatInputModule
];

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    PollRoutingModule,
    SharedModule,
    FormsModule,
    NgxChartsModule
  ],
  declarations: [
    PollListComponent,
    DialogStartingPollComponent,
    OngoingPollsComponent,
    DialogAddOptionComponent,
  ],
  exports: [
    PollListComponent,
    DialogStartingPollComponent,
    OngoingPollsComponent,
    DialogAddOptionComponent
  ],
  providers: [
    PollService,
    OptionService
  ],
  entryComponents: [
    DialogStartingPollComponent,
    DialogAddOptionComponent
  ]
})
export class PollsModule { }
