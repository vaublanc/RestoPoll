import { Injectable } from '@angular/core';
import { OptionNature } from 'src/app/shared/option-nature';

// this service export his variables in order for any component who calles it to be abble to change them.
@Injectable()
export class Globals {
  // this handle the main title displayed on the app component.
  title: string;
  // this boolean allows us to know whether the user is on the home-page or not.
  isHomePage: boolean;
  // keep in memory all the nature possible for an option
  optionNatureList: OptionNature[];
}

