import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:1998/api/user'; // URL of your backend

  constructor(private http: HttpClient) { }

  getUserProfile(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/${id}`);
  }
}
