import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberCount'
})
export class NumberCountPipe implements PipeTransform {

  transform(value:string): any {
    let count=0;
    for (let  ch of value) {
      console.log(ch);
      if (ch>='a ' && ch<='z' || ch>='A' && ch <='Z') {
        count ++;

      }
    }
    return count;
  }

}
