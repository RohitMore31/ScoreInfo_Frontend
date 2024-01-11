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
import { TeamDetailsComponent } from './Homepages/team-details/team-details.component';
import { LoginComponent } from './Loginpages/login/login.component';
import { ForgotPasswordComponent } from './Loginpages/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddScoreComponent } from './Scoreboardpages/Component/add-score/add-score.component';
import { AddScheduleComponent } from './Scoreboardpages/Component/add-schedule/add-schedule.component';
import { AddDashboardComponent } from './Scoreboardpages/Component/add-dashboard/add-dashboard.component';
import { FixMatchComponent } from './Scoreboardpages/Component/fix-match/fix-match.component';
import { TossTeamComponent } from './Scoreboardpages/Component/toss-team/toss-team.component';
import { ScoreboardComponent } from './Scoreboardpages/Component/scoreboard/scoreboard.component';
import { HighlightComponent } from './Scoreboardpages/Component/highlight/highlight.component';
import { ControlPanelComponent } from './Scoreboardpages/Component/control-panel/control-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LivescoreComponent,
    TeamsComponent,
    PointtableComponent,
    ScheduleComponent,
    HomeScreenComponent,
    NavbarComponent,
    TeamDetailsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AddScoreComponent,
    AddScheduleComponent,
    AddDashboardComponent,
    FixMatchComponent,
    TossTeamComponent,
    ScoreboardComponent,
    HighlightComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
