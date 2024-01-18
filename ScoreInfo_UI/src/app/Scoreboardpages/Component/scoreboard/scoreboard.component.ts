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
  
  constructor(){
  
    
  }
  ngOnInit(){
    console.log("in constr");
    
    console.log(this.batters);
    console.log(this.bowler);
    console.log(this.inningData);
    
    
  }
  Batter:MatchPlayerScore[] = [];
  Bowlers:MatchPlayerWicket[]=[];
}
