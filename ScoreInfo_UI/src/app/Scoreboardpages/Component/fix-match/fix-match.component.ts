import { Component } from '@angular/core';
import { Match } from 'src/app/Interface/Match';
import { Player } from 'src/app/Interface/Player';
import { ApiService } from '../../Services/api.service';
import { MatchTeam } from 'src/app/Interface/MatchTeam';
import { MatchPlayerScore } from 'src/app/Interface/MatchPlayerScore';
import { MatchPlayerWicket } from 'src/app/Interface/MatchPlayerWicket';
import { MatchWicketRecord } from 'src/app/Interface/MatchWicketRecord';
import { MatchTeamScore } from 'src/app/Interface/MatchTeamScore';
import { Router } from '@angular/router';
import { TossTeamComponent } from '../toss-team/toss-team.component';

@Component({
  selector: 'app-fix-match',
  templateUrl: './fix-match.component.html',
  styleUrls: ['./fix-match.component.css']
})
export class FixMatchComponent {

  showMatchesList:boolean =true;
  Matches:Match[] =[];
  selectedMatch: Match | null = null; // Declare selectedMatch property in your component
  Team1Players:Player[]=[];
  Team2Players:Player[]=[];
  selectedmatchTeam1Players:Player[]=[];
  selectedmatchTeam2Players:Player[]=[];
  isTeamSelected:boolean=false;
  matchTeam:MatchTeam ={} as MatchTeam

  constructor(private apiService:ApiService,private router:Router){}

  ngOnInit(): void {
    this.fetchMatches();
  }

  fetchMatches():void {
    this.apiService.getMatches("Not Yet Started").subscribe(
      (res)=>{
        this.Matches=res;
      },(err)=>{
        console.log(err);
      }
    )
  }

  showForm(){
   if(this.selectedMatch!=null){
   this.showMatchesList =false;

  // geting first team players
   this.apiService.getTeamPlayer(this.selectedMatch.team1).subscribe(
      (res)=>{
       this.Team1Players = res
      },(err)=>{
        console.log(err);
      }  
    )

     // geting Second team players
     this.apiService.getTeamPlayer(this.selectedMatch.team2).subscribe(
      (res)=>{
       this.Team2Players = res
      },(err)=>{
        console.log(err);
      }  
    )
   }
  }

  // select team 1 players
  onTeam1PlayerSelection(selectedPlayer: Player) {
    const index = this.selectedmatchTeam1Players.findIndex((player) => player._id === selectedPlayer._id);
    if (index === -1 && this.selectedmatchTeam1Players.length < 11) {
      this.selectedmatchTeam1Players.push(selectedPlayer); // Add player if not present and team isn't full
    } else if (index !== -1) {
      this.selectedmatchTeam1Players.splice(index, 1); // Remove player if already selected
    } else {
      alert('Team is full! You can select a maximum of 11 players.');
    }
  }

  isSelected(player: Player): boolean {
    return this.selectedmatchTeam1Players.some((selectedPlayer) => selectedPlayer._id === player._id);
  }

  isTeamFull(): boolean {
    return this.selectedmatchTeam1Players.length >= 11;
  }


// select team 2 players
  onTeam2PlayerSelection(selectedPlayer: Player){
    const index = this.selectedmatchTeam2Players.findIndex((player) => player._id === selectedPlayer._id);

    if (index === -1 && this.selectedmatchTeam2Players.length < 11) {
      this.selectedmatchTeam2Players.push(selectedPlayer); // Add player if not present and team isn't full
    } else if (index !== -1) {
      this.selectedmatchTeam2Players.splice(index, 1); // Remove player if already selected
    } else {
      alert('Team is full! You can select a maximum of 11 players.');
    }
  }

  isSelectedTeam2(player: Player): boolean {
    return this.selectedmatchTeam2Players.some((selectedPlayer) => selectedPlayer._id === player._id);
  }

  isTeam2Full(): boolean {
    return this.selectedmatchTeam2Players.length >= 11;
  }


fitxMatch(){
  if (this.selectedmatchTeam1Players.length === 11 && this.selectedmatchTeam2Players.length === 11) {
    
    this.matchTeam.matchId=this.selectedMatch?._id??" ";
    this.matchTeam.matchNumber=this.selectedMatch?.matchNumber??0;
    this.matchTeam.status="Team Selected";
    this.matchTeam.matchDate =this.selectedMatch?.matchDate??new Date();

    this.matchTeam.selectedmatchTeam1Players=this.selectedmatchTeam1Players;
    this.matchTeam.team1=this.selectedMatch?.team1?this.selectedMatch.team1:"";
    this.matchTeam.team1name=this.selectedMatch?.team1name
    this.matchTeam.team1PlayersScore=[] as MatchPlayerScore[];
    this.matchTeam.team1PlayersWicket=[] as MatchPlayerWicket[];
    this.matchTeam.team1WicketRecord=[] as MatchWicketRecord [];
    this.matchTeam.team1Score = {} as MatchTeamScore;

    this.matchTeam.selectedmatchTeam2Players=this.selectedmatchTeam2Players;
    this.matchTeam.team2=this.selectedMatch?.team2?this.selectedMatch.team2:"";
    this.matchTeam.team2name=this.selectedMatch?.team2name
    this.matchTeam.team2PlayersScore=[] as MatchPlayerScore[];;
    this.matchTeam.team2PlayersWicket=[] as MatchPlayerWicket[];
    this.matchTeam.team2WicketRecord=[]as MatchWicketRecord [];
    this.matchTeam.team2Score = {} as MatchTeamScore;
      
      
    // DONT SAVE DATA REDIRECT TO TOSS PAGE
    this.router.navigate(['/toss-team'], { state: { data: this.matchTeam } });
         

    // SAVE DATA AND REDIRECT TO TOSS PAGE
    // this.apiService.fixTeamSelection(this.matchTeam).subscribe(
    //     res =>{
    //       console.log("mtttt");
    //       console.log(this.matchTeam);
          
    //       console.log(res);
    //       this.router.navigate(['/toss-team'], { state: { data: res } });
    //       // this.router.navigate(['/toss-team']);
    //     },err=>{
    //       console.log(err);
    //     }
    //   )

    } else {
      this.isTeamSelected=true;
    }
  }
}

