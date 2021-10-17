import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  //for interpolation
  name : string = "Abc";
  age:number = 20;
  salary:number= 70000;
  
  //methods
  getname(){
    return "Helloo there";
  }

  //to make the value Dynamic
  btnColor:string = "btn "+"pink";

  buttonClr:string;

  isDisabled:boolean= true;
  
  constructor(){
    const color = ['wheat', 'green','aqua', 'cyan','yellow',"violet"];
    this.buttonClr = "btn " + color[Math.floor(Math.random()*6)]; //to access any property under a method we use 'this' keyword

    setTimeout(()=>{
      this.isDisabled= false
    },3000)
    //this is a javascript code to set time to enable any button
  }
}
