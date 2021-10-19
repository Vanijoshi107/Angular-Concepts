import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-top',
  templateUrl: './c-top.component.html',
  styleUrls: ['./c-top.component.css']
})
export class CTOpComponent {
  @Output() myevent= new EventEmitter<string>();
  passData(){
    this.myevent.emit("hello there");
  }


}
