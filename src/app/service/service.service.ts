import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '../dto/SignUpRequest';
import { LoginRequest } from '../dto/LoginRequest';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  private     API_SIGNUP = 'http://localhost:1998/signup';
  private     API_SIGNIN = 'http://localhost:1998/signin';
  private TOKEN_KEY = 'jwt';

  constructor(private http:HttpClient) { }



  
                     //  <?--------------sign up ------------------->
                     signup(role: string, signUpRequest: SignUpRequest): Observable<any>{
                      return  this.http.post(`${this.API_SIGNUP}?role=${role}`,signUpRequest) 
                 }
                   //  <?--------------login up ------------------->
                 signin(loginRequest:LoginRequest):Observable<{ token: string, role: string }> {
                       return this.http.post<{ token: string, role: string }>(`${this.API_SIGNIN}`,loginRequest)}



                       isAuthenticated(): boolean {
                        const token = localStorage.getItem(this.TOKEN_KEY); 
                        return !!token; 
                      }
}
