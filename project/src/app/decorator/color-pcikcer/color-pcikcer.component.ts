import { Component, ViewChild, ElementRef, AfterViewInit, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-color-pcikcer',
  templateUrl: './color-pcikcer.component.html',
  styleUrls: ['./color-pcikcer.component.scss']
})
export class ColorPcikcerComponent  implements AfterViewInit{

  @ViewChild('inputtext') selectcolo?:ElementRef;
  @HostBinding('style.background') selectcolor?:string;
  @HostListener('input',[`$event.target.value`]) oninputfille(color:any){
    console.log(this.selectcolo?.nativeElement,color);

    this.selectcolor=color;

  }

  ngAfterViewInit(): void {
    console.log(this.selectcolo);
    this.selectcolo=this.selectcolo?.nativeElement.value

  }
}
