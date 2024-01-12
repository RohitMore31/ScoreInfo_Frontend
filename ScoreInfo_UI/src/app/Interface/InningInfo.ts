export interface Ball {
    ballNumber: number;
    runsScored: number;
    isWide: boolean;
    isNoBall: boolean;
    isWicket: boolean;
    wicketType?: string; // Optional, specify the type of wicket if applicable
    batsmanName: string;
  }
  
  export interface Over {
    overNumber: number;
    bowlerName: string;
    balls: Ball[];
    overTotalRuns: number;
    overTotalExtras: number;
  }
  
  export interface Inning {
    matchId:string
    matchTeamId:string,
    inningNumber: number;
    battingTeam: string;
    bowlingTeam:string;
    overs: Over[];
    totalRuns: number;
    totalWickets: number;
    totalExtras: number;
  }
  