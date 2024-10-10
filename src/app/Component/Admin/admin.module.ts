import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AllContactComponent } from './all-contact/all-contact.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LogoutModule } from '../Shared/logout/logout.module';


@NgModule({
  declarations: [
    DashboardAdminComponent,
    AddArticleComponent,
    ShowArticleComponent,
    AllContactComponent,
    NavbarComponent,
    SideBarComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LogoutModule
    
  ]
})
export class AdminModule { }
