import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce' // we can use any name and it should be used in html
})
export class PipePipe implements PipeTransform {

  transform(value: string, length: number): any {
    if (value.length <= length) {
      return value;
    } else {
      return value.substr(0, length) + '...';
    }
  }

}
