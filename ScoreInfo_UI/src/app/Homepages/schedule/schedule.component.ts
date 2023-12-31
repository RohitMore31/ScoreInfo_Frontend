import { Component } from '@angular/core';

export interface Match {
  name: string;
  status: string; // 'recent' or 'upcoming'
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  teams: Match[] = [
    { name: 'Match 1', status: 'recent' },
    { name: 'Match 2', status: 'upcoming' },
    // Add more matches with their status
  ];
}
