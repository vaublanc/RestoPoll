import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatGridListModule} from '@angular/material';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Title } from './title';


import { AppComponent } from './app.component';
import { DialogTeamCreationComponent } from './dialog-team-creation/dialog-team-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    DialogTeamCreationComponent,
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
    MatGridListModule
  ],
  entryComponents: [DialogTeamCreationComponent],
  providers: [Title],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
