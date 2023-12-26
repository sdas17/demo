import { Component } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component {
  name='';
  email='';
  Phone='';
  Addreess='';
  submited:boolean =false;
  qualification=[
    {
      school:'',
      degree:'',
      year:''
    }
  ]
  addqualification(){
this.qualification.push( {
  school:'',
  degree:'',
  year:''
})
  }

  showprevie(){


    this.submited=true;

  }
  editbutton(){
    this.submited=false;
  }
}
