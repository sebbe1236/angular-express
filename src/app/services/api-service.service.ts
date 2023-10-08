import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get('http://localhost:8000/api/messages');
  }

  sendMessage(data: any): Observable<any> {
    const body = {
      email: data.email,
      text: data.text,
    };
    return this.http.post('http://localhost:8000/api/messages/inbox', body);
  }
}
