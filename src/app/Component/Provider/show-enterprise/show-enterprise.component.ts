import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { EnterpriseDto } from 'src/app/dto/EnterpriseDto';
import { EnterpriseService } from 'src/app/service/enterprise.service';

@Component({
  selector: 'app-show-enterprise',
  templateUrl: './show-enterprise.component.html',
  styleUrls: ['./show-enterprise.component.css']
})
export class ShowEnterpriseComponent implements OnInit {
  enterprise : EnterpriseDto | null = null;

  provider_id !:number

  constructor(private enterpriseService:EnterpriseService) { }

  ngOnInit(): void {
    this.getProvider_id()
    this.Enterprise()
  }

  getProvider_id(){
    const token :any= localStorage.getItem("jwt")
    
      const decodeToken :any = jwtDecode(token)
     this.provider_id=decodeToken.id;
     console.log(this.provider_id);
     
    }

    
  

Enterprise(){
  this.enterpriseService.getEnterpriseById(this.provider_id).subscribe((res:EnterpriseDto)=>{
    this.enterprise = res
    localStorage.setItem("enterprise_id",String(res.enterpriseId))
    console.log(res);
  })
}
// update(){
//   this.enterpriseService.updateEnterprise()
// }
}
