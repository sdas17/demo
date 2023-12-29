import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortnumber'
})
export class SortnumberPipe implements PipeTransform {

  transform(arr:number[],sortNumber:'asc'| 'desc'): number[] {
    if (sortNumber ==='asc') {
      return arr.sort();

    } else {
      return arr.sort((a,b)=>b-a);

    }
  }

}
