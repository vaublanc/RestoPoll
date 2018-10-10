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

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService
  ) { }

  getOptions(poll: Poll): Observable<Option[]> {
    if (poll.nature === NatureEnum.Restaurant) {
      const restaurantUrl = this.url + 'restaurants';
      return this.http.get<Restaurant[]>(`${restaurantUrl}/?pollId=${poll.id}`).pipe(
        catchError(this.exceptionService.handleError<Restaurant[]>('getPolls')));
    }
  }
}
