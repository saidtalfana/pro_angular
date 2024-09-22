import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/dto/LoginRequest';
import { ServiceService } from 'src/app/service/service.service';
import { jwtDecode } from 'jwt-decode';
import { Role } from 'src/app/enums/Role';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.valide();
  }

  valide() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginRequest: LoginRequest = this.loginForm.value;

    this.service.signin(loginRequest).subscribe({
      next: (response) => {
        console.log(response)
        const { token} = response;
        localStorage.setItem('jwt', token);

        const decodedToken: any = jwtDecode(response.token);

        if (decodedToken.roles.includes(Role.ADMIN)) {
          this.router.navigate(['admin']);
        } 
        else if (decodedToken.roles.includes(Role.PROVIDER)) {
          this.router.navigate(['provider']);
        } 
        else if (decodedToken.roles.includes(Role.USER)) {
          this.router.navigate(['user']);
        } else {
          this.router.navigate(['main']);
        }

       
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}