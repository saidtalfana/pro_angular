// report.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://localhost:1998/report';

  constructor(private http: HttpClient) {}

  downloadProductReport(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/products`, { responseType: 'blob' });
  }
}
