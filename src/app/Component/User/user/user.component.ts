import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit {
  ngOnInit(): void {
    alert("this is user s");
    
    throw new Error('Method not implemented.');
  }




}
