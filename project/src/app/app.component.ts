import { AfterContentInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit,DoCheck{
  ngDoCheck(): void {
    console.log('docheck hook invoked');

  }

  // parentInput = 'Initial Value';
  childdemo='';
  displaycompoent:boolean =false;
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');

  }
  addbutton(){
    let random=Math.floor(Math.random()*10);
this.childdemo='randomnumber'+random;
  }
  toggle(){
    this.displaycompoent=!this.displaycompoent
  }

  // changeInput() {
  //   this.parentInput = 'New Value';
  // }
}
