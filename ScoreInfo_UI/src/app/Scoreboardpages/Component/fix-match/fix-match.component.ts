import { Component } from '@angular/core';
import { Match } from 'src/app/Interface/Match';
import { Player } from 'src/app/Interface/Player';
import { ApiService } from '../../Services/api.service';

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

  selectedTeam1Players:Player[]=[];
  selectedTeam2Players:Player[]=[];

  isTeamSelected:boolean=false;

  constructor(private apiService:ApiService){}

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
    const index = this.selectedTeam1Players.findIndex((player) => player._id === selectedPlayer._id);

    if (index === -1 && this.selectedTeam1Players.length < 11) {
      this.selectedTeam1Players.push(selectedPlayer); // Add player if not present and team isn't full
    } else if (index !== -1) {
      this.selectedTeam1Players.splice(index, 1); // Remove player if already selected
    } else {
      alert('Team is full! You can select a maximum of 11 players.');
    }
  }
  isSelected(player: Player): boolean {
    return this.selectedTeam1Players.some((selectedPlayer) => selectedPlayer._id === player._id);
  }
  isTeamFull(): boolean {
    return this.selectedTeam1Players.length >= 11;
  }


// select team 2 players
onTeam2PlayerSelection(selectedPlayer: Player){
  const index = this.selectedTeam2Players.findIndex((player) => player._id === selectedPlayer._id);

  if (index === -1 && this.selectedTeam2Players.length < 11) {
    this.selectedTeam2Players.push(selectedPlayer); // Add player if not present and team isn't full
  } else if (index !== -1) {
    this.selectedTeam2Players.splice(index, 1); // Remove player if already selected
  } else {
    alert('Team is full! You can select a maximum of 11 players.');
  }
}
isSelectedTeam2(player: Player): boolean {
  return this.selectedTeam2Players.some((selectedPlayer) => selectedPlayer._id === player._id);
}
isTeam2Full(): boolean {
  return this.selectedTeam2Players.length >= 11;
}

fitxMatch(){
    if (this.selectedTeam1Players.length === 11 && this.selectedTeam2Players.length === 11) {
      // Perform the action when both teams have 11 players selected
      console.log(this.selectedTeam1Players);
      console.log(this.selectedTeam2Players);
    } else {
      this.isTeamSelected=true;
    }
  
}

}

