import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  userId!:number

  constructor(private userProfileService: UserService) { }

  ngOnInit(): void {
    this.getId()
    this.userProfileService.getUserProfile(this.userId).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user profile', error);
      }
    );
  }


  getId(){
    const value :any= localStorage.getItem('jwt')

    const decodeJwt : any = jwtDecode(value)

     this.userId = decodeJwt.id
     console.log(decodeJwt);
     
  }
}