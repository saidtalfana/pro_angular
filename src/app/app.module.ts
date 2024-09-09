import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './Component/Admin/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './Component/Provider/dashboard/dashboard.component';
import { UserComponent } from './Component/User/user/user.component';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { SignupComponent } from './Component/Main/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardAdminComponent,
    DashboardComponent,
    UserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
