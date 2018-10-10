import { ExceptionService } from './exceptions/exception.service';
import { HttpStatusService } from './loader/http-status.service';
import { NavigationService } from './navigation/navigation.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptorService } from './loader/loading-interceptor.service';
import { Globals } from './globals/globals';
import { MatProgressSpinnerModule } from '@angular/material';

const RxJS_Services = [LoadingInterceptorService];

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 200})
  ],
  exports: [
    MatProgressSpinnerModule
  ],
  providers: [
    Globals,
    RxJS_Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    },
    NavigationService,
    HttpStatusService,
    InMemoryDataService,
    ExceptionService
  ],
})
export class CoreModule { }
