import { Component } from '@angular/core';
import { MatchPlayerScore } from 'src/app/Interface/MatchPlayerScore';
import { MatchPlayerWicket } from 'src/app/Interface/MatchPlayerWicket';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  Batter:MatchPlayerScore[] = [];
  Bowlers:MatchPlayerWicket[]=[];
}
