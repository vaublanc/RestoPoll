import { PollService } from './shared/poll.service';
import { PollListComponent } from './poll-list/poll-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsRoutingModule } from './polls-routing.module';
import { MatCheckboxModule,
    MatExpansionModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

const MatModule = [
    MatCheckboxModule,
    MatExpansionModule
  ];

@NgModule({
    declarations: [
        PollListComponent
    ],
    imports: [
        CommonModule,
        PollsRoutingModule,
        MatModule,
    ],
    exports: [
        PollListComponent
    ],
    providers: [
        PollService
    ],
})
export class PollsModule {}
