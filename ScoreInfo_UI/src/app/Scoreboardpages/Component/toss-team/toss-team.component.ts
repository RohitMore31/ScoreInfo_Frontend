import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatchTeam } from 'src/app/Interface/MatchTeam';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-toss-team',
  templateUrl: './toss-team.component.html',
  styleUrls: ['./toss-team.component.css']
})
export class TossTeamComponent {
   matchFixData:MatchTeam ={ } as MatchTeam
   battingTeam: string = '';

  constructor(private router: Router,private apiService:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const data = navigation.extras.state['data'];
      this.matchFixData = data;
    }
  }
  
  ngOnInit(): void {
    // this.fetchMatches();
  }

  fetchMatches() {
    // (this.apiService.GetMatchSelectedWithSelectedStatus("659e3603b3ca87d11c625f76")).subscribe(
    //   res => this.matchFixData=res
    // );
    
  }

  setBattingFirstTeam(teamname:any){
    this.battingTeam=teamname;
    // console.log(this.battingTeam);
  }

  startMatch() {
    const confirmation = window.confirm('Are you sure you want to start the match?');
    if (confirmation) {
      this.matchFixData.toss = this.battingTeam;
      this.apiService.fixTeamSelection(this.matchFixData).subscribe(
        (res) => {
          console.log(res); // Log the response
          const saveData = {
            matchId:res.matchId,
            matchTeamId:res._id
          }
          
          // Redirect to the 'add-score' route with matchId and objectId as state

          this.router.navigate(['/add-score'], {
            state: {
             data:saveData
            }
          });
        },
        (err) => {
          console.log(err); // Log any error
        }
      );
    } else {
      // Handle if the user cancels the confirmation
    }
  }
}


