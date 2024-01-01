import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/Interface/Match';
import { Team } from 'src/app/Interface/Team';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:4000'; 

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.baseUrl}/teams`);
  }

  fixMatch(matchData:Match): Observable<any>{
    return this.http.post(`${this.baseUrl}/match`,matchData);
  }
}
