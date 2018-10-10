import { OptionsModule } from './options/options.module';
import { TeamMembersModule } from './team-members/team-members.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TeamsModule } from './teams/teams.module';
import { PollsModule } from './polls/polls.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    TeamsModule,
    TeamMembersModule,
    PollsModule,
    OptionsModule,
    AppRoutingModule,
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
