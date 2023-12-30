import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivescoreComponent } from './Homepages/livescore/livescore.component';
import { PointtableComponent } from './Homepages/pointtable/pointtable.component';
import { ScheduleComponent } from './Homepages/schedule/schedule.component';
import { TeamsComponent } from './Homepages/teams/teams.component';
import { HomeScreenComponent } from './Homepages/home-screen/home-screen.component';

const routes: Routes = [
  {path:"",component:HomeScreenComponent},
  {path:"livescore", component:LivescoreComponent},
  {path:"pointtable",component:PointtableComponent},
  {path:"schedule",component:ScheduleComponent},
  {path:"teams",component:TeamsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
