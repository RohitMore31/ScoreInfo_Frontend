import { Component } from '@angular/core';

export interface Team {
  no: number;
  name: string;
  match: number;
  win: number;
  loss: number;
  point: number;
  runRate: number;
   // Color for the row
}

@Component({
  selector: 'app-pointtable',
  templateUrl: './pointtable.component.html',
  styleUrls: ['./pointtable.component.css']
})
export class PointtableComponent {
  teams: Team[] = [
    { no: 1, name: 'Chatrapati worriers', match: 10, win: 7, loss: 2, point: 21, runRate: 1.25  },
    { no: 2, name: 'Jay Hanuman Sports', match: 10, win: 6, loss: 3, point: 18, runRate: 1.15 },
    { no: 2, name: 'Jay Hanuman Sports', match: 10, win: 6, loss: 3, point: 18, runRate: 1.15 },
    { no: 2, name: 'Jay Hanuman Sports', match: 10, win: 6, loss: 3, point: 18, runRate: 1.15 },
    // Add more teams with their details and colors
  ];

 
}
