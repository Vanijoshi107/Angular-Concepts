import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name:string="amar akbar anthony";
  salary:number= 1000000;
  myDate!  :Date;

}
