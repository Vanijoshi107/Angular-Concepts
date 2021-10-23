import { Component } from '@angular/core';
import { User } from 'src/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Mastercourse';
  users:Array<User>=[ // defining the type of users
    {name:"abc", age:23,salary:35000,gender:"female", imgPath:"assets/person1.webp"},
    {name:"pqr", age:23,salary:30000,gender:"female", imgPath:"assets/person2.webp"},
    {name:"mno", age:23,salary:45000,gender:"female", imgPath:"assets/person3.webp"}
    // { by clicking ctrl+space we can check the suggestions... it will be same as we made in models. }
  ]

  //making a function
  recData(e:any){
    alert(e);
  }
}
