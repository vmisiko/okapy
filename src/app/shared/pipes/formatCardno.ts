import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatLastFour'
})
export class formatCardno implements PipeTransform{
    transform(value: string) : string {
      console.log(value, 'transform');
      const result = value.substr(-4);
      return `**** ${result}`;
    }
}