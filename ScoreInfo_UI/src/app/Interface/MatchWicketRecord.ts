export interface MatchWicketRecord{
    matchId: string,
    wicketType: string,
    playerOut: string,
    dismissedBy: string,
    bowlerName:string,
    fieldingPosition?: string,
    additionalDetails?: string,
    timestamp:Date
}