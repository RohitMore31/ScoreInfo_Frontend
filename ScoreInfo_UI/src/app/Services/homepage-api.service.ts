import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../Interface/Match';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageAPIService {

  private baseUrl = 'http://localhost:4000'; 

  constructor(private http: HttpClient) { }

  getMatches(): Observable<Match[]>{
    return this.http.get<Match[]>(`${this.baseUrl}/match`);
  }
}

