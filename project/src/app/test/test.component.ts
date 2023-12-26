import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements DoCheck {


  @Input() inputdata:any;
  currentValue:string |any;
  previousValue:string |any;
  private previousUserName:string | undefined;


  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['inputdata']) {
  //     this.previousValue=changes['inputdata'].previousValue
  //     this.currentValue=changes['inputdata'].currentValue
  //     console.log(changes);



  //   }

























  // }
  ngDoCheck(): void {
    console.log(`docheckis caliing`);




  }




}
