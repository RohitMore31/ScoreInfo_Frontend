import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teams = [
    { name: "Naganath Sports", color: "list-group-item-primary" },
    { name: "Chatrapati worriers", color: "list-group-item-secondary" },
    { name: "Pailwan Sports", color: "list-group-item-success" },
    { name: "Jay Hanuman Sports", color: "list-group-item-danger" },
    { name: "Royal Sports", color: "list-group-item-warning" },
    { name: "DSK Sports", color: "list-group-item-info" }
  ];
}
