import { Injectable } from '@angular/core';
import { Poll } from '../../polls/shared/poll';
import { Observable } from 'rxjs';
import { Option } from './option';

@Injectable()
export abstract class OptionService {

  constructor() { }

  abstract getOption(id: string): Observable<Option>;

  abstract getOptions(poll: Poll): Observable<Option[]>;
}
