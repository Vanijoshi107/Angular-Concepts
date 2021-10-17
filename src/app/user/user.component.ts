import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  btnColor:string = "btn "+"purple";
  
  firstName:string = 'Gaurav';
    lastName:string = 'pant';
    address:string | undefined;

  salary:number = 100;
  convertValue(){
    alert(this.salary*75)
  }

// event +property binding -- two way binding
  inputValue:string= "Mango"

  getInput(e:any){
    // console.log(e.target.value)
    this.inputValue = e.target.value;
  }
}
