import { MatchPlayerScore } from "./MatchPlayerScore";
import { MatchPlayerWicket } from "./MatchPlayerWicket";
import { MatchTeamScore } from "./MatchTeamScore";
import { Player } from "./Player";
import { MatchWicketRecord } from "./MatchWicketRecord";

export interface MatchTeam{
    _id?: string;
    matchId:string;
    toss:string;
    matchDate: Date;
    venue?: string;
    status:string;
    matchNumber:Number

    team1: string;
    team1name?:string,
    selectedmatchTeam1Players:Player[], // selected team
    team1Score:MatchTeamScore,     // collect team1 score 
    team1PlayersScore:MatchPlayerScore[], // collect batsman score
    team1PlayersWicket:MatchPlayerWicket[], //collect bowelers wicket
    team1WicketRecord:MatchWicketRecord[]  // collect wicket record

    team2: string;
    team2name?:string,
    selectedmatchTeam2Players:Player[],
    team2Score:MatchTeamScore
    team2PlayersScore:MatchPlayerScore[],
    team2PlayersWicket:MatchPlayerWicket[],
    team2WicketRecord:MatchWicketRecord[] 
   
 
}