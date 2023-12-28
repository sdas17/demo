import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample'
})
export class PipeExamplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
