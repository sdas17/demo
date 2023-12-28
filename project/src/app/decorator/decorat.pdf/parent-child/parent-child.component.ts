import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent {
@Input() displaymessage:any='';
@Input()displaydata:any='';
@Output() eventdata= new EventEmitter();
event(data:any){
  this.eventdata.emit('my name is karan das')

}

}
