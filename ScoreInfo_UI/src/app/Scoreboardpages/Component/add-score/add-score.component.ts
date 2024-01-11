import { Component } from '@angular/core';
import { Match } from 'src/app/Interface/Match';
import { ApiService } from '../../Services/api.service';
import { Player } from 'src/app/Interface/Player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.css']
})
export class AddScoreComponent {
  currentComponent: string = 'control-panel'; // Default component to display
  matchId:string='';
  matchTeamId=''

  constructor(private router: Router,private apiService:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const data = navigation.extras.state['data'];
      this.matchId=data.matchId
      this.matchTeamId=data.matchTeamId
      console.log(data);
    }
  }

  


  showComponent(component: string) {
    this.currentComponent = component;
  }

}
