import { HttpHeaders } from '@angular/common/http';

export class Constants {
  public static get homePageTitle(): string { return 'Où allez-vous manger aujourd\'hui ?'; }

  // alow us to specify for an http request that we want to display the global loader
  public static get httpHeaderForLoading() { return new HttpHeaders({'loading': 'true'}); }
}
