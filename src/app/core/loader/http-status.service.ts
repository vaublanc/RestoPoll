import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// Allows the app-component to know at any time whether the loader has to be displayed or not.
@Injectable()
export class HttpStatusService {
  public isLoaded = new BehaviorSubject(true);
}
