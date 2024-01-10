import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/Interface/Match';
import { MatchTeam } from 'src/app/Interface/MatchTeam';
import { Player } from 'src/app/Interface/Player';
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

  getMatches(status: string): Observable<Match[]> {
    const data = { status: status };
    return this.http.post<Match[]>(`${this.baseUrl}/match/notstarted`, data);
  }

  getTeamPlayer(teamId: String): Observable<Player[]> {
    const data = { teamId: teamId };
    return this.http.post<Player[]>(`${this.baseUrl}/player/teamplayers`, data);
  }

  fixTeamSelection(matchData:MatchTeam): Observable<any>{
    return this.http.post(`${this.baseUrl}/teammatch/add`,matchData);
  }

  GetMatchSelectedWithSelectedStatus(id:string):Observable<MatchTeam>{
    return this.http.get<MatchTeam>(`${this.baseUrl}/teammatch/${id}`)
  }
  
} 