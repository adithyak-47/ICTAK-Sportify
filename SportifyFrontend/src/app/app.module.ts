import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParticipantsComponent } from './participants/participants.component';
import { HouseCaptainsComponent } from './house-captains/house-captains.component';
import { OrganisersComponent } from './organisers/organisers.component';
import { ResultsComponent } from './results/results.component';
import { StudentLandingComponent } from './student-landing/student-landing.component';
import { HcLandingComponent } from './hc-landing/hc-landing.component';
import { OrgLandingComponent } from './org-landing/org-landing.component';
import { FormsModule } from '@angular/forms';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthenticateService } from './authenticate.service';
import { ApiService } from './api.service';
import { TokenInterceptService } from './token-intercept.service';
import { StudenttokeninterceptService } from './studenttokenintercept.service';
import { OrganisertokeninterceptService } from './organisertokenintercept.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParticipantsComponent,
    HouseCaptainsComponent,
    OrganisersComponent,
    ResultsComponent,
    StudentLandingComponent,
    HcLandingComponent,
    OrgLandingComponent,
    StudentSignupComponent,
    EventsComponent,
    NavbarComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticateService,ApiService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:StudenttokeninterceptService,
    multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:OrganisertokeninterceptService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
