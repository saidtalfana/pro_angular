import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpRequest } from 'src/app/dto/SignUpRequest';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;

 constructor(private fb: FormBuilder,
  private service: ServiceService,
  private router: Router){

 }
  ngOnInit(): void {
   this.signUpForm = this.fb.group({
    role: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  signUp() {
    if (this.signUpForm.valid) {
      const signUpRequest: SignUpRequest = this.signUpForm.value;
      const role = this.signUpForm.value.role;
      this.service.signup(role, signUpRequest).subscribe(() => {
      });
      console.log(signUpRequest)
    }

    this.signUpForm = this.fb.group({
      role: ['', Validators.required],
        name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });

  }
}
