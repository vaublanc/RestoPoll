import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HttpStatusService {
  public isLoaded = new BehaviorSubject(true);
}
