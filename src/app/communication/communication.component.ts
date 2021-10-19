import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent{
  @Input() name!:string;
  @Input() age!:number;
  @Input() gender!:string;
  @Input() salary!:number;
  @Input() img!:string;

  
}
