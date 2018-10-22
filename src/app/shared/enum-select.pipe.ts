import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'enumSelect'
})
export class EnumSelectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const keys = [];
    for (const enumMember in value) {
      if (isString(enumMember)) {
        keys.push({key: enumMember, value: value[enumMember]});
      }
    }
    return keys;
  }

}
