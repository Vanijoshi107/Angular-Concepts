import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{
  salary:number= 10;

  fruits:string[]=['mango', 'banana', 'grapes', 'apple']

}
