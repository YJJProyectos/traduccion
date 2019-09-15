import { Pipe, PipeTransform } from '@angular/core';
import pinyin from 'chinese-to-pinyin';

@Pipe({
  name: 'pinyin'
})
export class PinyinPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if ( value != undefined ) {
      return pinyin(value);
    } else {
      return value;
    }
  }

}
