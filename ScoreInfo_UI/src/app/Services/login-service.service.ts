import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl = 'http://localhost:4000'; // Define your API base URL

  constructor(private http: HttpClient) { }

  login(data: any) {
    const loginUrl = `${this.baseUrl}/users/login`; // Define your login endpoint

    // Make the HTTP POST request to the login endpoint with the provided data
    return this.http.post(loginUrl, data);
  }
  
}
