import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  declarations: [
    MovieComponent
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule { }
