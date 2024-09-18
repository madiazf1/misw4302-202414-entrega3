import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ReportComponent } from './report/report.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserDeletionComponent } from './user-deletion/user-deletion.component';

@NgModule({
  declarations: [			
    AppComponent, LoginComponent, SigninComponent, ReportComponent, ReportDetailComponent, UserSettingsComponent, UserDeletionComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
