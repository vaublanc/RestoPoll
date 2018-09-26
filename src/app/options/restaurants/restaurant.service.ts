import { Injectable } from '@angular/core';
import { OptionService } from '../shared/option.service';
import { Poll } from '../../polls/shared/poll';
import { Observable } from 'rxjs';
import { Restaurant } from '../shared/restaurant';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Constants } from '../../core/globals/constants';
import { ExceptionService } from '../../core/services/exception.service';
import { catchError } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService implements OptionService {

  restaurantUrl = 'api/restaurants';

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService
  ) { }

  getOption(id: string): Observable<Restaurant> {
    return new Observable<Restaurant>();
  }

  getOptions(poll: Poll): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.restaurantUrl}/?pollId=${poll.id}`).pipe(
      catchError(this.exceptionService.handleError<Restaurant[]>('getPolls'))
    );
  }

}
