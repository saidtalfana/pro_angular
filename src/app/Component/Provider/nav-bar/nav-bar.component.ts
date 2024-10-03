import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  name:string =''
  constructor(){

  }
  ngOnInit(): void {

   this.getName()
   console.log(this.name);
   
    // throw new Error('Method not implemented.');
  }

  getName(){
    const value :any= localStorage.getItem('jwt')

    const decodeJwt : any = jwtDecode(value)

     this.name = decodeJwt.sub
     console.log(decodeJwt);
     
  }

}
