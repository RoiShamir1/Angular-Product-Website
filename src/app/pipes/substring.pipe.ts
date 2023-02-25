import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring',
})
export class SubstringPipe implements PipeTransform {
  transform(value: string, ending: string = '...'): string {
    if (value.length > 20) {
      return value.slice(0, 20) + ending;
    }
    return value;
  }
}
