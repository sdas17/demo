import { Component } from '@angular/core';

@Component({
  selector: 'app-number-count',
  templateUrl: './number-count.component.html',
  styleUrls: ['./number-count.component.scss']
})
export class NumberCountComponent {
  stringval='';
  myarray=[
    12,21,31
  ]
  addupdate(){
    this.myarray.push(5)

  }
}
