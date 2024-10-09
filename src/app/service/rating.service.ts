import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '../dto/SignUpRequest';
import { LoginRequest } from '../dto/LoginRequest';
import { Observable } from 'rxjs';
import { Rating } from '../model/Rating';


@Injectable({
  providedIn: 'root'
})
export class RatingService {


    private     API_RATING = 'http://localhost:1998/api/rating';
  constructor(private http:HttpClient) { }


  submitRating(rating: Rating, productId: number, userId: number): Observable<Rating> {
    return this.http.post<Rating>(`${this.API_RATING}/add`, rating, {
      params: {
        productId: productId.toString(),
        userId: userId.toString()
      }
    });
  }

  getRatingsByProductId(productId: number): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.API_RATING}/product/${productId}`);
  }
  
                     
}
