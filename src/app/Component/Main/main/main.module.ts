import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { SigninComponent } from '../signin/signin.component';
import { HeaderComponent } from '../header/header.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { ProductDatailsComponent } from '../product-datails/product-datails.component';
import { FooterComponent } from '../footer/footer.component';
import { SearchComponent } from '../search/search.component';



@NgModule({
  declarations: [
    MainComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    ProductDatailsComponent,
    ContactUsComponent,
    SearchComponent
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MainModule { }
