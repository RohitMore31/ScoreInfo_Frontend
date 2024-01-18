import { Component, Input } from '@angular/core';
import { Inning } from 'src/app/Interface/InningInfo';
import { MatchPlayerScore } from 'src/app/Interface/MatchPlayerScore';
import { MatchPlayerWicket } from 'src/app/Interface/MatchPlayerWicket';
import { Player } from 'src/app/Interface/Player';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  @Input() batters:Player [] = [];
  @Input() bowler:Player [] =[];
  @Input() inningData:Inning = {}as Inning;
  
  inningBatters:MatchPlayerScore[] = [];
  inningBowlers:MatchPlayerWicket[]=[];

  constructor(){}

  ngOnInit(){
    console.log("in constr");
    console.log(this.batters);
    console.log(this.bowler);
    console.log(this.inningData);
    
    this.addToInnigBatters();
    this.addToInnigBowlers();
  }

  addToInnigBatters(){
    if(this.batters.length>0){
      this.batters.forEach(player => {
        const batsman: MatchPlayerScore = {} as MatchPlayerScore;
        batsman.playerId=player._id
        batsman.matchId = this.inningData.matchId;
        batsman.playerName = player.playerName;
        batsman.playerSurName=player.playerSurName;
        batsman.playerRun=0;
        batsman.playerBall=0;
        batsman.playerFour=0;
        batsman.playerSix=0;
        batsman.playerStrikeRate=0;
        batsman.wicketStatus="not out"

        this.inningBatters.push(batsman);
      });
    }else{
      console.log("select batters"); //show notification
    }
  }

  addToInnigBowlers(){
    if(this.bowler.length>0){
      this.bowler.forEach(player => {
        const bowler :MatchPlayerWicket ={}as MatchPlayerWicket;
        bowler.matchId=this.inningData.matchId;
        bowler.playerId=player._id
        bowler.playerName = player.playerName
        bowler.playerSurName=player.playerSurName
        bowler.playerOvers=0;
        bowler.playerMiddenOver=0
        bowler.playerExtra=0
        bowler.playerNoball=0
        bowler.playerWide=0
        bowler.playerRun=0
        bowler.playerEco=0

        this.inningBowlers.push(bowler);
     })
    }else{
      console.log("select bowlers"); //show notification
    }
  }
  

}
