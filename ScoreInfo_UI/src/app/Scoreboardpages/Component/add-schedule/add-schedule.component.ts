import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import {Team} from '../../../Interface/Team'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Match } from 'src/app/Interface/Match';


@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent {
  fixMatchForm!: FormGroup;
  teams!: Team[] ;
  todayDate: Date = new Date();
  matchData:Match={
    team1: "",
    team2: "",
    matchDate: new Date(),
    matchNumber: 0,
    status:"Not Yet Started"
  }

  constructor(private formBuilder: FormBuilder, private teamService: ApiService) 
  { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchTeams();
  }

  fetchTeams(): void {
    this.teamService.getTeams()
      .subscribe((teams: Team[]) => {
        this.teams = teams;
      });
  }

  initializeForm(): void {
    this.fixMatchForm = this.formBuilder.group({
      team1: ['', Validators.required],
      team2: ['', Validators.required],
      matchDate: ['', Validators.required]
    }, { validators: this.validateTeams });
  }


  validateTeams(form: FormGroup): { [key: string]: boolean } | null {
    const team1 = form.get('team1');
    const team2 = form.get('team2');

    if (team1 && team2 && team1.value === team2.value) {
      return { 'sameTeam': true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.fixMatchForm.valid) {
      this.matchData.team1 = this.fixMatchForm.value.team1;
      this.matchData.team1name = this.teams.find(team => team._id === this.fixMatchForm.value.team1)?.teamname;
      this.matchData.team2=this.fixMatchForm.value.team2;
      this.matchData.team2name = this.teams.find(team => team._id === this.fixMatchForm.value.team2)?.teamname;
      this.matchData.venue="";
      this.matchData.matchDate=this.fixMatchForm.value.matchDate;
      this.matchData.matchNumber=0;
    

      console.log(this.matchData);
      
      this.teamService.fixMatch(this.matchData).subscribe(
        (res)=>{
          alert(res.message)
          console.log(res);
        },(err)=>{
          console.log((err));
        }
      )
    }
  }
  
}

