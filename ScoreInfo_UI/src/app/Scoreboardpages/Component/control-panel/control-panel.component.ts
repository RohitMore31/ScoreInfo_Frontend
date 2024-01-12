import { Component, Input } from '@angular/core';
import { MatchTeam } from 'src/app/Interface/MatchTeam';
import { ApiService } from '../../Services/api.service';
import { Player } from 'src/app/Interface/Player';
import { Inning } from 'src/app/Interface/InningInfo';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Input() matchId!: string
  @Input() matchTeamId!: string

  bowlerSelected: boolean = true;
  inningData:Inning ={} as Inning;

  batFirstTeamPlayers: Player[] = []; 
  ballFirstTeamPlayers: Player[] = []; 
  matchTeamData!: MatchTeam;
  battingPlayer: Player[] = [];

  // batsmans:Player[2]=[]
  
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getTeamDetails();
    this.getInningData();
  }

  getTeamDetails() {
    this.apiService.getMatchTeam(this.matchTeamId).subscribe(res => {
      this.matchTeamData = res
    }, err => console.log(err)
    )
  }

  getInningData(){
    //get innning
    this.apiService.getInninData(this.matchTeamId).subscribe(
      (res)=>{
        console.log(res);
        this.inningData=res;
      },err => console.log(err)
    );

  //   // get BatFirst Team Players
  //   this.apiService.getTeamPlayer(this.matchTeamData.team1).subscribe(
  //     (res) => {
  //       if (this.matchTeamData.team1name === this.matchTeamData.toss) {
  //         this.batFirstTeamPlayers = res
  //       } else {
  //         this.ballFirstTeamPlayers = res
  //       }
  //     }, (err) => {
  //       console.log(err);
  //     }
  //   )

  //   // geting Second team players
  //   this.apiService.getTeamPlayer(this.matchTeamData.team2).subscribe(
  //     (res) => {
  //       if (this.matchTeamData.team1name === this.matchTeamData.toss) {
  //         this.batFirstTeamPlayers = res
  //       } else {
  //         this.ballFirstTeamPlayers = res
  //       }
  //     }, (err) => {
  //       console.log(err);
  //     }
  //   )
  }

  isBattingPlayerSelected(): boolean {
    if(this.battingPlayer.length===2)return true
    return false;
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

  onPlayerSelection(player: Player) {
    if (this.battingPlayer.length < 2) {
      this.battingPlayer.push(player)
    }else if(this.battingPlayer.includes(player)){
      const index = this.battingPlayer.indexOf(player);
      this.battingPlayer.splice(index, 1);
    }
  }


}

