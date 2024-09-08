import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { SigninComponent } from './Main/signin/signin.component';
import { DashboardAdminComponent } from './Component/Admin/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './Component/Provider/dashboard/dashboard.component';
import { UserComponent } from './Component/User/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    SigninComponent,
    DashboardAdminComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
