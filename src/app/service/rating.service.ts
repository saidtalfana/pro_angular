import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '../dto/SignUpRequest';
import { LoginRequest } from '../dto/LoginRequest';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RatingService {


    private     API_SIGNUP = 'http://localhost:1998/api/ratn';
  constructor(private http:HttpClient) { }



  
                     
}
