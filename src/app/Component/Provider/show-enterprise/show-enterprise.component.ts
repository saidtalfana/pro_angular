import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { EnterpriseDto } from 'src/app/dto/EnterpriseDto';
import { EnterpriseService } from 'src/app/service/enterprise.service';

@Component({
  selector: 'app-show-enterprise',
  templateUrl: './show-enterprise.component.html',
  styleUrls: ['./show-enterprise.component.css']
})
export class ShowEnterpriseComponent implements OnInit {
  enterprise: EnterpriseDto | null = null;
  provider_id!: number;

  constructor(
    private enterpriseService: EnterpriseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProvider_id();
    this.fetchEnterprise();
  }

  private getProvider_id(): void {
    const token = localStorage.getItem("jwt");
    
    if (token) {
      const decodeToken: any = jwtDecode(token);
      this.provider_id = decodeToken.id;
      console.log(this.provider_id);
    } else {
      console.error('JWT token not found in local storage.');
    }
  }

  private fetchEnterprise(): void {
    this.enterpriseService.getEnterpriseById(this.provider_id).subscribe(
      (res: EnterpriseDto) => {
        this.enterprise = res;
        localStorage.setItem("enterprise_id", String(res.enterpriseId));
        console.log(res);
      },
      error => {
        console.error('Error fetching enterprise data:', error);
        // Optionally handle the error here (e.g., show a notification)
      }
    );
  }

  update(id: number): void {
    this.router.navigate(['/update_enterprise', id]);
  }
}
