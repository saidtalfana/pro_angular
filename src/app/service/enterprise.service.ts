import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnterpriseDto } from '../dto/EnterpriseDto';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

    private     API_ENTERPRISE = 'http://localhost:1998/api/enterprise';


  constructor(private http:HttpClient) { }


        //  <?----------------------------------Enterprise -------------------------------------->
                    
                     //  <?--------------add  ------------------->
                     addEnterprise(enterpriseDto :EnterpriseDto,provider_id : number):Observable<EnterpriseDto>{
                        return this.http.post<EnterpriseDto>(`${this.API_ENTERPRISE}/add_enterprise?provider_id=${provider_id}`,enterpriseDto)
                          }
  
                     
                            //  <?--------------get ------------------->
                     getEnterpriseById(enterprise_id  : number):Observable<EnterpriseDto>{
                      return this.http.get<EnterpriseDto>(`${this.API_ENTERPRISE}/get_enterprise/${enterprise_id}`)
                     }
  
  
                         //  <?--------------update ------------------->
                         updateEnterprise(enterpriseDto : EnterpriseDto):Observable<EnterpriseDto>{
                          return this.http.put<EnterpriseDto>(`${this.API_ENTERPRISE}/update_enterprise`,enterpriseDto)
                        }
  
                    


}
