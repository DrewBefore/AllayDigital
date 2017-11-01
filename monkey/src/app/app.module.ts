import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    FooterComponent
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
      {path: 'gallery', component: GalleryComponent},
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
