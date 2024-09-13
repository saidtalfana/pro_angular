import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-add-enterprise',
  templateUrl: './add-enterprise.component.html',
  styleUrls: ['./add-enterprise.component.css']
})
export class AddEnterpriseComponent implements OnInit {
  enterpriseForm !: FormGroup;
  provider_id !: number

  constructor(private fb: FormBuilder,private enterpriseService:EnterpriseService) {

  }


  ngOnInit(): void {
this.Enterprise()
this.getIdProviderFromJwt() 
 }

  Enterprise(){
    this.enterpriseForm = this.fb.group({
      enterpriseName: ['', [Validators.required]],
      enterpriseDescription: ['', [Validators.required]],
      enterpriseLogo: ['', [Validators.required]],
      activityName: ['', [Validators.required]],
      activityDescription: ['', [Validators.required]]
    });
  }

  getIdProviderFromJwt(){
    const token = localStorage.getItem("jwt")
    if(token){
      const decodeToken :any = jwtDecode(token)
      console.log("this is it",decodeToken);
      this.provider_id = decodeToken.id;
      console.log(this.provider_id);
      
      }
  }
  onSubmit(): void {
    if (this.enterpriseForm.valid) {
      const value = this.enterpriseForm.value
      localStorage.setItem('enterpriseId',this.enterpriseForm.value.enterpriseName)
     this.enterpriseService.addEnterprise(value,this.provider_id).subscribe()
      console.log('Form Submitted', value);
      this.Enterprise()

    } else {
      console.log('Form is invalid');
    }
  }
}