import { ExceptionService } from '../../../core/exceptions/exception.service';
import { Injectable } from '@angular/core';
import { Poll } from '../../polls/shared/poll';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Option } from './option';


@Injectable()
export class OptionService {

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService,
  ) { }

  getOptions(poll: Poll, optionNatureUrl: string): Observable<Option[]> {
    return this.http.get<Option[]>(`api${optionNatureUrl}/?pollId=${poll.id}`).pipe(
      catchError(this.exceptionService.handleError<Option[]>('getOptions')));
  }

  addNewOption(option: Option, optionNatureUrl: string): Observable<Option> {
    return this.http.post<Option>(`api${optionNatureUrl}`, option).pipe(
      catchError(this.exceptionService.handleError<Option>('addNewOption'))
    );
  }
}
