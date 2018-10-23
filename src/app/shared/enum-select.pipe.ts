import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'enumSelect'
})
export class EnumSelectPipe implements PipeTransform {

  // this pipe is not currently used but i keep it in case i need to implement it

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
