import { TranslateService } from './translation/translate.service';
import { ExceptionService } from './exceptions/exception.service';
import { HttpStatusService } from './loader/http-status.service';
import { NavigationService } from './navigation/navigation.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptorService } from './loader/loading-interceptor.service';
import { Globals } from './globals/globals';
import { MatProgressSpinnerModule } from '@angular/material';
import { OptionNaturesService } from './option-natures/option-natures.service';

const RxJS_Services = [LoadingInterceptorService];

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('fr');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 200, passThruUnknownUrl: true})
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
    ExceptionService,
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    },
    OptionNaturesService
  ],
})
export class CoreModule { }
