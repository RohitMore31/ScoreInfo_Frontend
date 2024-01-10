export interface Match{
    _id?: string;
    team1: string;
    team1name?:string,
    team2: string;
    team2name?:string
    matchDate: Date;
    venue?: string;
    status:string;
    matchNumber:Number
}