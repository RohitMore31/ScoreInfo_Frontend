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
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
