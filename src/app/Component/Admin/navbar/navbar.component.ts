import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

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
