import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  implements OnInit,OnDestroy{
  counter :number= 0;
  Incrementcount(){

    this.counter++;
      }

  @Input()childparent:any;
  @Output() datadelte= new EventEmitter<number>();




  removedata(index:any){
    this.datadelte.emit(index)


  }

  ngOnDestroy(): void {
    console.log('child component ondestroyed');

  }
  ngOnInit(): void {
    console.log('child component intalization');

  }


}
