import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivescoreComponent } from './Homepages/livescore/livescore.component';
import { TeamsComponent } from './Homepages/teams/teams.component';
import { PointtableComponent } from './Homepages/pointtable/pointtable.component';
import { ScheduleComponent } from './Homepages/schedule/schedule.component';
import { HomeScreenComponent } from './Homepages/home-screen/home-screen.component';
import { NavbarComponent } from './Homepages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LivescoreComponent,
    TeamsComponent,
    PointtableComponent,
    ScheduleComponent,
    HomeScreenComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
