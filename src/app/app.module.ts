import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TeamsModule } from './team-feature/teams.module';
import { RestaurantModule } from './restaurant-feature/restaurant.module';
import { MovieModule } from './movie-feature/movie.module';

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
    AppRoutingModule,
    TeamsModule,
    RestaurantModule,
    MovieModule
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
