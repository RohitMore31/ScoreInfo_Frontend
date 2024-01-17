export interface MatchPlayerScore{
    matchId: string,

    playerId:string,
    playerName:string,
    playerSurName:string,
    playerTeam:string,
    
    // batsman
    playerRun:Number,
    playerFour:Number,
    playerSix:Number,
    playerBall:Number,
    playerStrikeRate:Number,
    wicketStatus:string,

}