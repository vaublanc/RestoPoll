import { TranslateService } from './../core/translation/translate.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  pure: true
})
export class TranslatePipe implements PipeTransform {

  constructor(
    private translate: TranslateService
  ) {}

  transform(value: any, key: any): any {
    switch (key) {
      case 'TeamFeature':
        return this.translate.data.TeamFeature[value] || value;
      default:
        break;
    }
  }
}
