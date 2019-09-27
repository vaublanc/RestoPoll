import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RestaurantModule } from './options-feature/restaurant-feature/restaurant.module';
import { MovieModule } from './options-feature/movie-feature/movie.module';
import { UserModule } from './user-feature/user.module';

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
    UserModule,
    RestaurantModule,
    MovieModule,
  ],

  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
