import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
          MatCheckboxModule,
          MatDialogModule,
          MatInputModule,
          MatGridListModule,
          MatProgressSpinnerModule} from '@angular/material';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Globals } from './core/globals';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './core/in-memory-data.service';


import { AppComponent } from './app.component';
import { DialogTeamCreationComponent } from './teams/dialog-team-creation/dialog-team-creation.component';
import { DialogTeamSuppressionComponent } from './teams/dialog-team-suppression/dialog-team-suppression.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    DialogTeamCreationComponent,
    DialogTeamSuppressionComponent,
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
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  entryComponents: [
    DialogTeamCreationComponent,
    DialogTeamSuppressionComponent
  ],
  providers: [Globals],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
