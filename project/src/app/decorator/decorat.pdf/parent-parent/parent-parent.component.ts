import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-parent',
  templateUrl: './parent-parent.component.html',
  styleUrls: ['./parent-parent.component.scss']
})
export class ParentParentComponent {
  displaycompoent:string='message from parent compoent';
  msgdata='';
  courses:{id:number,name:string}[]=[
    {
      id:1,name:'subham'
    },
    {
      id:2,name:'karan kumar'
    },
    {
      id:3,name:'rahul kumar'
    },{
      id:4,name:'rohit'
    }

  ]
  addbutton(){
    this.displaycompoent='karan is my best friendds';


  }
  datadata(data:any){
console.log(data);
this.msgdata=data;

  }
}
