import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlPrettifier'
})
export class UrlPrettifierPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/ /g, '-');
  }

}
