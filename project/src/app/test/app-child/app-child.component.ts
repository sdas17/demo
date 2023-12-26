import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss']
})
export class AppChildComponent implements OnChanges, DoCheck {
  @Input() inputProperty: string | undefined;
  lastChangeDetected: string | undefined;
  ngDoCheck(): void {
    console.log('ngDoCheck - Custom change detection logic');
    this.lastChangeDetected = 'ngDoCheck';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges - Input property changed:', this.inputProperty);
    this.lastChangeDetected = 'ngOnChanges';
  }



}
