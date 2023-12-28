import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit ,AfterViewInit{


  tabledata :string[]=['tabledata1 ','tabledata2','tabledata3']
  addbutton(){
const data =`tabledata ${this.tabledata.length+1}`;
this.tabledata.push(data)

  }
  deleteiem(index:any){
    if (index >=0 && index <this.tabledata.length) {
      this.tabledata.splice(index,1)

    }


  }
  ngOnInit(): void {
    console.log('intaliztion');

  }
@ViewChild(ChildComponent)childComponent?:ChildComponent;
@ViewChild('elementref',) elementref?:ElementRef<HTMLButtonElement>;
@ViewChild('color') elementref2?:ElementRef<HTMLBodyElement>;

  addclick(){
    console.log(this.childComponent?.Incrementcount());
    this.childComponent?.Incrementcount()




  }
  ngAfterViewInit(): void {
console.log(this.childComponent);
if (this.elementref?.nativeElement) {
  this.elementref.nativeElement.innerHTML='counter++';


}

  }
}
