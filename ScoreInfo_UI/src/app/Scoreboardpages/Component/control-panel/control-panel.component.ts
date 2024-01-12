import { Component, Input } from '@angular/core';
import { MatchTeam } from 'src/app/Interface/MatchTeam';
import { ApiService } from '../../Services/api.service';
import { Player } from 'src/app/Interface/Player';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Input() matchId!: string
  @Input() matchTeamId!: string

  battingPlayerSelected: boolean = true;
  bowlerSelected: boolean = true;

  batFirstTeamPlayers: Player[] = []; 
  ballFirstTeamPlayers: Player[] = []; 
  matchTeamData!: MatchTeam;

  battingTeam:string='';
  bolwingTeam:string='';

  // batsmans:Player[2]=[]
  
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getTeamDetails(this.matchTeamId);
   
  }


  
  getTeamDetails(id: string) {

    this.apiService.getMatchTeam(id).subscribe(res => {
      this.matchTeamData = res
    }, err => console.log(err)
    )
  }

  getInningData(){
    // geting first team players
    this.apiService.getTeamPlayer(this.matchTeamData.team1).subscribe(
      (res) => {
        if (this.matchTeamData.team1name === this.matchTeamData.toss) {
          this.batFirstTeamPlayers = res
        } else {
          this.ballFirstTeamPlayers = res
        }
      }, (err) => {
        console.log(err);
      }
    )

    // geting Second team players
    this.apiService.getTeamPlayer(this.matchTeamData.team2).subscribe(
      (res) => {
        if (this.matchTeamData.team1name === this.matchTeamData.toss) {
          this.batFirstTeamPlayers = res
        } else {
          this.ballFirstTeamPlayers = res
        }
      }, (err) => {
        console.log(err);
      }
    )
  }



  isBattingPlayerSelected(): boolean {
    return this.battingPlayerSelected;
  }

  isBowlerSelected(): boolean {
    return this.bowlerSelected;
  }

  isStepValid(stepIndex: number): boolean {
    if (stepIndex === 0) {
      return this.isBattingPlayerSelected();
    } else if (stepIndex === 1) {
      return this.isBowlerSelected();
    }
    return true; // Return true for other steps
  }




}

