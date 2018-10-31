import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatButtonModule} from '@angular/material';
import { TeamsModule } from '../team-feature/teams.module';
import { PollsModule } from '../poll-feature/polls.module';
import { UserService } from './shared/user.service';

const MatModule = [
  MatGridListModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatButtonModule,
  FormsModule
];

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MatModule,
    SharedModule,
    TeamsModule,
    PollsModule
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent,
    TeamsModule,
    PollsModule
  ],
  providers: [
    UserService
  ],
})
export class UserModule { }
