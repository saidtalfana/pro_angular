import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/dto/LoginRequest';
import { ServiceService } from 'src/app/service/service.service';
import {jwtDecode} from 'jwt-decode'; // Attention à l'import ici
import { Role } from 'src/app/enums/Role';
import { AuthService } from 'src/app/service/auth.service';

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
    private router: Router,
    private authService: AuthService
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
        console.log(response);
        const { token } = response;
        localStorage.setItem('jwt', token);

        const decodedToken: any = jwtDecode(response.token);

        if (decodedToken.roles.includes(Role.ADMIN)) {
          this.router.navigate(['admin']);
        } else if (decodedToken.roles.includes(Role.PROVIDER)) {
          this.router.navigate(['provider']);
        } else {
          this.router.navigate(['main']);
        }

        // Appeler cette méthode pour mettre à jour l'état de connexion
        this.onLoginSuccess();
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }

  onLoginSuccess() {
    this.authService.login(); // Met à jour l'état de connexion
  }
}
