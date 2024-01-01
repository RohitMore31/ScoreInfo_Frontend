import { Component } from '@angular/core';
import { Match } from 'src/app/Interface/Match';
import { HomepageAPIService } from 'src/app/Services/homepage-api.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  constructor(private apiService:HomepageAPIService){}
  Matches : Match[] = []

  ngOnInit(): void {
    this.fetchSchedule();
  }

  fetchSchedule():void {
    this.apiService.getMatches().subscribe(
      (res)=>{
        this.Matches=res;
      },(err)=>{
        console.log(err);
      }
    )
  }


  
  
  
}
