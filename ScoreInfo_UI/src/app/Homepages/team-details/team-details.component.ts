import { Component } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {
  players: any[] = [
    { name: 'John Doe', email: 'john.doe@gmail.com', role: 'Goalkeeper' },
    { name: 'Alex Ray', email: 'alex.ray@gmail.com', role: 'Defender' },
    { name: 'Kate Hunington', email: 'kate.hunington@gmail.com', role: 'Midfielder' }
    // Add more players as needed
  ];
}
