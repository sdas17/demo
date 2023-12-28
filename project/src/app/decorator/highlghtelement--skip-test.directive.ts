import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlghtelementSkipTest]'
})
export class HighlghtelementSkipTestDirective implements OnInit {


  constructor() { }
  colorArray=[
    'red',
    'lightgray',
    'lightorange',
    'lightgreen',
    'lightblue'
  ]

  @HostBinding('style.background')bgColor: any;
  @HostBinding('style.color')textcolor?:any;

  ngOnInit(): void {
    this.bgColor='red';
    this.textcolor='black';
  }
  @HostListener("click") otToggle(){
    this.randomcolor();
    // if (this.bgColor='red') {
    //   this.bgColor='#101820ff';
    //   this.textcolor='#ff4';

    // }else{
    //   this.bgColor='red';
    //   this.textcolor='black';
    // }



  }
  randomcolor(){
    const colorpack=Math.floor(Math.random()*this.colorArray.length);
    if (this.bgColor!==this.colorArray[colorpack]) {
      this.bgColor=this.colorArray[colorpack];
      this.textcolor='#ff4';

    }else{
      this.bgColor='red';
      this.textcolor='black';
    }

  }
}

