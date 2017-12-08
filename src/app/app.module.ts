import { TeamService } from './team/team.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MatListModule, MatTableModule, MatIconModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { CoachComponent } from './coach/coach.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ScheduleComponent,
    TeamComponent,
    ContactComponent,
    RegistrationComponent,
    HomeComponent,
    ScheduleComponent,
    TeamComponent,
    GalleryComponent,
    FooterComponent,
    CoachComponent,
    ChallengeComponent,
    ServicesComponent
  ],
  imports: [
    MatListModule, 
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFontAwesomeModule,   
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'team', component: TeamComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'challenge', component: ChallengeComponent},
      {path: 'gallery', component: GalleryComponent},
    ]),
    NgbModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
