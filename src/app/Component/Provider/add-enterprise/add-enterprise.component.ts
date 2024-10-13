import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { jwtDecode } from 'jwt-decode';
import { EnterpriseDto } from 'src/app/dto/EnterpriseDto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-enterprise',
  templateUrl: './add-enterprise.component.html',
  styleUrls: ['./add-enterprise.component.css']
})
export class AddEnterpriseComponent implements OnInit {
  enterpriseForm !: FormGroup;
  providerId !: number
  enterpriseId!:number

  constructor(private fb: FormBuilder,
    private enterpriseService:EnterpriseService,
    private route:ActivatedRoute

  ) {

  }


  ngOnInit(): void {
this.fetchEnterpriseId()
this.Enterprise()
this.getIdProviderFromJwt() 
 }

  Enterprise(){
    this.enterpriseForm = this.fb.group({
      enterpriseId:[''],
      enterpriseName: ['', [Validators.required]],
      enterpriseDescription: ['', [Validators.required]],
      enterpriseLogo: ['', [Validators.required]],
      activityName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  getIdProviderFromJwt(){
    const token = localStorage.getItem("jwt")
    if(token){
      const decodeToken :any = jwtDecode(token)
      console.log("this is it",decodeToken);
      this.providerId = decodeToken.id;
      console.log(this.providerId);
      
      }
  }
  onSubmit(): void {

    if (this.enterpriseForm.valid && this.providerId && !this.enterpriseId) {
      const value = this.enterpriseForm.value
      localStorage.setItem('enterpriseId',this.enterpriseForm.value.enterpriseName)
     this.enterpriseService.addEnterprise(value,this.providerId).subscribe()
      console.log('Form Submitted', value);
      this.Enterprise()

    } else if (this.enterpriseForm.valid && this.enterpriseId){
        const updateValue = this.enterpriseForm.value
        this.enterpriseService.updateEnterprise(updateValue).subscribe((res:EnterpriseDto)=>{
          console.log("enterprise updated ",res);
          
        })
    }
    else{
     console.error("enterprise does not updated");
      
    }
  }

  
  
  



  fetchEnterpriseId(){
    this.route.params.subscribe(params => {
      this.enterpriseId = +params['id'];
      if (this.enterpriseId) {
        this.loadEnterprise();
      }
    })
  }

  loadEnterprise(): void {
    this.enterpriseService.getEnterprise(this.enterpriseId)
    .subscribe((res:EnterpriseDto)=>{
      this.enterpriseForm.patchValue(res);
      console.log('this is res of update enterprise ',res);
      
    },error=>{
      console.error('error fetching enterprise',error)
    })
  }




}