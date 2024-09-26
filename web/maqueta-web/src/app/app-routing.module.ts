import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ReportComponent } from './report/report.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserDeletionComponent } from './user-deletion/user-deletion.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'report', component: ReportComponent},
  {path: 'report-detail', component: ReportDetailComponent},
  {path: 'user-settings', component: UserSettingsComponent},
  {path: 'user-deletion', component: UserDeletionComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
