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
  @Input() matchId!:string
  @Input() matchTeamId!:string

 // Example flags for step completion
 battingPlayerSelected: boolean = true;
 bowlerSelected: boolean = true;
 Team1Players:Player[]=[];
 Team2Players:Player[]=[];

 matchTeamData!: MatchTeam;

 constructor(private apiService:ApiService){
 }

 ngOnInit(): void {
  this.getTeamDetails(this.matchTeamId);
}

 
 getTeamDetails(id:string){

  this.apiService.getMatchTeam(id).subscribe(res=>{
    this.matchTeamData=res
    console.log(this.matchTeamData);
  },err=>console.log(err)
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

