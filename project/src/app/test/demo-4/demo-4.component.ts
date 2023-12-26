import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-4',
  templateUrl: './demo-4.component.html',
  styleUrls: ['./demo-4.component.scss']
})
export class Demo4Component implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    console.log(`afterconten:ngOnDestroy`);

  }
  ngOnInit(): void {
    console.log(`afterconten:ngOnInit`);

  }

}
