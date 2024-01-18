import { Component, Input } from '@angular/core';
import { MatchTeam } from 'src/app/Interface/MatchTeam';
import { ApiService } from '../../Services/api.service';
import { Player } from 'src/app/Interface/Player';
import { Inning } from 'src/app/Interface/InningInfo';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Input() matchId!: string
  @Input() matchTeamId!: string

  inningData:Inning ={} as Inning;

  batFirstTeamPlayers: Player[] = []; 
  ballFirstTeamPlayers: Player[] = []; 
  matchTeamData!: MatchTeam;
  batters: Player[] = [];
  bowler: Player[] = [];

  isInningStarted : boolean = false;

  


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

  startInning(){
    this.inningData.inningNumber=1;
    this.inningData.status="started";
    this.apiService.startInning(this.inningData).subscribe(
      res=>{console.log(res);this.isInningStarted=true},err=>console.log(err)
    )
    
  }

  isBattingPlayerSelected(): boolean {
    if(this.batters.length===2)return true
    return false;
  }

  isBowlerSelected(): boolean {
   if(this.bowler.length==1) return true
   return false;
  }

  isStepValid(stepIndex: number): boolean {
    if (stepIndex === 0) {
      return this.isBattingPlayerSelected();
    } else if (stepIndex === 1) {
      return this.isBowlerSelected();
    }
    return true; // Return true for other steps
  }

  onBattingPlayerSelection(player: Player) {
    if (this.batters.length < 2) {
      this.batters.push(player)
    }else if(this.batters.includes(player)){
      const index = this.batters.indexOf(player);
      this.batters.splice(index, 1);
    }
  }

  onBowlingPlayerSelection(player: Player) {
    if (this.bowler.length < 1) {
      this.bowler.push(player)
    }else if(this.bowler.includes(player)){
      const index = this.bowler.indexOf(player);
      this.bowler.splice(index, 1);
    }
  }

  getBattingTeamPlayers(){
    if(this.matchTeamData.toss===this.matchTeamData.team1name){
      return this.matchTeamData.selectedmatchTeam1Players
    }else{
      return this.matchTeamData.selectedmatchTeam2Players;
    }
  }

  getBowlingTeamPlayers(){
    if(!(this.matchTeamData.toss===this.matchTeamData.team1name)){
      return this.matchTeamData.selectedmatchTeam1Players
    }else{
      return this.matchTeamData.selectedmatchTeam2Players;
    }
  }

  
}

