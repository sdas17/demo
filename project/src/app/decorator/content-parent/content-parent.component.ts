import { AfterContentInit, Component, ContentChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.scss']
})
export class ContentParentComponent implements AfterContentInit,OnChanges{
  ngOnChanges(): void {
    console.log('rever');

  }   
  @ContentChild('remodata2') parered?:ElementRef;
  ngAfterContentInit(): void {
    const demo=this.parered?.nativeElement
    console.log(demo.style);

    console.log('rever');


  }


}
