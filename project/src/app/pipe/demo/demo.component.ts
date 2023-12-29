import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent  implements OnChanges{
  pi=3.146656;
  ngOnChanges(): void {

  }
//   showDate:Date = new Date();
//   myname ='angular slice project'
//   showDat =[
//     {
// name:'loremss',state:"odihsa",salary:'33333'
//     },
//     {
//       name:'loremss',state:"odihsa",salary:'33333'
//           },  {
//             name:'loremss',state:"odihsa",salary:'33333'
//                 },  {
//                   name:'loremss',state:"odihsa",salary:'33333'
//                       },

//   ]
//   datademo=['myarra1','myarra2','myarra3','myarra4','myarra5','myarra6']
  products: { name: string; imageUrl: string }[] = [
    {
      name: 'HTML, CSS, Sass, Bootstrap - Beginner to Expert + Bootcamp',
      imageUrl: './assets/html-css-tutorials.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: './assets/JS_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: './assets/TypeScript_Course.jpg',
    },
    {
      name: 'Mastering React with Interview Questions, eStore Project',
      imageUrl: './assets/React_Course.png',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: './assets/RDBMS.png',
    },
    {
      name: 'Mastering Angular with Marathon Interview Quesitons',
      imageUrl: './assets/Angular_Course.jpg',
    },
    {
      name: 'NodeJS - Marathon Interview Questions Series',
      imageUrl: './assets/NodeJS_Course.jpg',
    },
    {
      name: 'Python - Marathon Interview Questions Series',
      imageUrl: './assets/Python_Course.jpg',
    },

  ];
  pgSize: number = 4;
//item number is coming zero
  startIndex:number=0;

  endIndex:number=this.pgSize;
  previousPage(){

    this.startIndex-=this.pgSize;
    this.endIndex-=this.pgSize;

  }
  nextPage(){

console.log( this.startIndex+=this.pgSize, this.endIndex+=this.pgSize);

    this.startIndex+=this.pgSize;
    this.endIndex+=this.pgSize;

  }
  datademo=[
{
  name:'Dev',
  email:'Dev@example.com',
  address:{
    street:'23 Main st',
    city:'las Vegas',
    state:'nevada',
    zip:8090,
  }
}
  ]
}
