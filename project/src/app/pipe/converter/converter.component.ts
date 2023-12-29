import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  WeightinPount:number=0;
  Weightinkg:number=0;
  convertchange(){
    console.log(this.Weightinkg);

    this.Weightinkg=this.WeightinPount*0.453592;
  }

}
