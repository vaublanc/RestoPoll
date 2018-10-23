import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ExceptionService } from 'src/app/core/exceptions/exception.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/shared/constants';
import { Restaurant } from './restaurant';

@Injectable()
export class RestaurantService {

  restaurantUrl = 'api/restaurants';

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService,
  ) { }

  getRestaurant(restaurantId: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.restaurantUrl}/${restaurantId}`, {headers: Constants.httpHeaderForLoading}).pipe(
      catchError(this.exceptionService.handleError<Restaurant>('GetRestaurant'))
    );
  }
}
