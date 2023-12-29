import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent  {



  number =[1,2,3,4,5,6,7,8];
  sortOrders='asc';
  showlist:boolean =false;
  sortNumberdata:any;
  get sortNumber() {
console.log(this.sortOrders);

    this.sortNumberdata=[...this.number].sort((a,b)=>{
      if (this.sortOrders ==='asc') {
            this.showlist=true;
        return a-b
      }else {
            this.showlist=true;

        return b-a

      }
    });
    return this.sortNumberdata;

  }
  showSorting (){
    // this.showlist=true;
    // console.log(this.showlist);

  }

}
