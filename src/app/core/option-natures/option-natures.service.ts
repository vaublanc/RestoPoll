import { ExceptionService } from 'src/app/core/exceptions/exception.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OptionNature } from 'src/app/shared/option-nature';

@Injectable()
export class OptionNaturesService {

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService
  ) { }

    getOptionNatures(): Observable<OptionNature[]> {
      return this.http.get<OptionNature[]>('api/natures').pipe(
        catchError(this.exceptionService.handleError<OptionNature[]>('getOptionNatures'))
      );
    }

    getOptionNature(natureId: string): Observable<OptionNature> {
      return this.http.get<OptionNature>(`api/natures/${natureId}`).pipe(
        catchError(this.exceptionService.handleError<OptionNature>('getOptionNature'))
      );
    }
}
