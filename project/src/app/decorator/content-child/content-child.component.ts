import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent  implements AfterContentInit{
  @ContentChild('remodata') parered?:ElementRef;
  ngAfterContentInit(): void {
    const demo=this.parered?.nativeElement
    console.log(demo.style);
    demo.style.fontStyle="Italic";
    demo.style.fontSize="20px"
    demo.style.color="#afeeee";



  }

}
