import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chid-demo',
  templateUrl: './chid-demo.component.html',
  styleUrls: ['./chid-demo.component.scss']
})
export class ChidDemoComponent implements AfterViewInit, DoCheck,OnChanges,AfterContentInit,AfterContentChecked{
  ngAfterViewInit(): void {
    const divElement :HTMLElement =this.wrapper?.nativeElement;
    console.log();
    divElement.style.color='goldenrod';
    divElement.style.fontSize="15px";
    divElement.style.fontWeight="300px"


    console.log(`ngAfterViewInit() hook invoke`);

  }
  ngAfterContentChecked(): void {
console.log('ngaftercontentchecked hooked');

  }
  @ViewChild('wrapper') wrapper!:ElementRef | undefined;
  @ContentChild('contentwrapper') content!:ElementRef |undefined;
  ngAfterContentInit(): void {
    console.log(`ngafterContentinit  was invoke.......`,);
    console.log(`ngafterContentinit  wrapper.......`,this.wrapper);
    console.log(`ngafterContentinit  content.......`,this.content);

  }
  ngOnChanges(): void {
    console.log('ngOnChanges was invoed');

  }
  ngDoCheck(): void {
  }


}
