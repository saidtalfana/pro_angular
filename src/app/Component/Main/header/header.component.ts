import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  activeLink: string = 'home'; // Default active link

  constructor(private authService: AuthService,private router : Router) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });
  }

  onLogout() {
    this.authService.logout();
    localStorage.removeItem("jwt")
    localStorage.removeItem("enterprise_id")
     this.router.navigateByUrl("")
  }

  setActiveLink(link: string) {
    this.activeLink = link; // Update the active link when clicked
  }

}
