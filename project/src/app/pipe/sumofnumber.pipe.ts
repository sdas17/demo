import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumofnumber',
  pure:false
})
export class SumofnumberPipe implements PipeTransform {

  transform(value: number[]): unknown {
    let sum=0;
    for(let demo of value){
      sum +=demo
    }
    return sum;
  }

}
