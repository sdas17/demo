import { Component } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.scss']
})
export class Project1Component {
  user:string ='';
  searchkey=[
    {id:2,empname:"karan",empsalary:"31,000"},

  ]
}
