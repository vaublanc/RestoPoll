import { HttpHeaders } from '@angular/common/http';

export class Constants {
  public static get homePageTitle(): string { return 'Où allez-vous manger aujourd\'hui ?'; }

  public static get httpHeaderForLoading() { return new HttpHeaders({'loading': 'true'}); }
}
