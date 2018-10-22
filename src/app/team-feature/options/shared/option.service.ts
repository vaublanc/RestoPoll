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

  restaurantUrl = 'api/restaurants';
  movieUrl = 'api/movies';
  urlUsed: string;

  constructor(
    private http: HttpClient,
    private exceptionService: ExceptionService
  ) { }

  getOptions(poll: Poll): Observable<Option[]> {
    // we need to split the different type of option we can get, in order to return the right one.
    switch (poll.nature) {
      case NatureEnum.Restaurant:
        this.urlUsed = this.restaurantUrl;
        break;

      case NatureEnum.Movie:
        this.urlUsed = this.movieUrl;
        break;

      default:
        return new Observable<Option[]>();
    }
    return this.http.get<Option[]>(`${this.urlUsed}/?pollId=${poll.id}`).pipe(
      catchError(this.exceptionService.handleError<Option[]>('getOptions')));
  }

  addNewOption(option: Option, optionNature: NatureEnum): Observable<Option> {
    switch (optionNature) {
      case NatureEnum.Restaurant:
        this.urlUsed = this.restaurantUrl;
        break;

      case NatureEnum.Movie:
        this.urlUsed = this.movieUrl;
        break;

      default:
      return new Observable<Option>();
    }
    return this.http.post<Option>(`${this.urlUsed}`, option).pipe(
      catchError(this.exceptionService.handleError<Option>('addNewOption'))
    );
  }
}
