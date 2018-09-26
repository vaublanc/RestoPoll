import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
          MatCheckboxModule,
          MatDialogModule,
          MatInputModule,
          MatGridListModule,
          MatProgressSpinnerModule,
          MatTabsModule,
          MatTableModule} from '@angular/material';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Globals } from './core/globals/globals';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/services/in-memory-data.service';


import { AppComponent } from './app.component';
import { DialogTeamCreationComponent } from './teams/dialog-team-creation/dialog-team-creation.component';
import { DialogTeamSuppressionComponent } from './teams/dialog-team-suppression/dialog-team-suppression.component';
import { LoadingInterceptorService } from './core/services/loading-interceptor.service';
import { HttpStatusService } from './core/services/http-status.service';
import { TeamMemberListComponent } from './team-member/team-member-list/team-member-list.component';
import { PollListComponent } from './polls/poll-list/poll-list.component';


const RxJS_Services = [LoadingInterceptorService, HttpStatusService];

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    DialogTeamCreationComponent,
    DialogTeamSuppressionComponent,
    TeamMemberListComponent,
    PollListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 200})
  ],
  entryComponents: [
    DialogTeamCreationComponent,
    DialogTeamSuppressionComponent
  ],
  providers: [
    Globals,
    RxJS_Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
