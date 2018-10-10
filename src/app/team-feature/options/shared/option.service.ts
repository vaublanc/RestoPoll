import { ExceptionService } from '../../../core/exceptions/exception.service';
import { Restaurant } from './restaurant';
import { Injectable } from '@angular/core';
import { Poll } from '../../polls/shared/poll';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Option } from './option';
import { NatureEnum } from 'src/app/shared/nature-enum';


@Injectable()
export class OptionService {

  url = 'api/';
  fullUrl: string;

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService
  ) { }

  getOptions(poll: Poll): Observable<Option[]> {
    // we need to split the different type of option we can get, in order to return the right one.
    switch (poll.nature) {
      case NatureEnum.Restaurant:
        this.fullUrl = this.url + 'restaurants';
        break;

      default:
        return new Observable<Option[]>();
    }
    return this.http.get<Option[]>(`${this.fullUrl}/?pollId=${poll.id}`).pipe(
      catchError(this.exceptionService.handleError<Option[]>('getOptions')));
  }
}