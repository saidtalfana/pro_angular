import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDatailsComponent } from './product-datails/product-datails.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchComponent } from './search/search.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProductComponent } from './product/product.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ArticleDetailesComponent } from './article-detailes/article-detailes.component';
import { RatingComponent } from './rating/rating.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';




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
    SearchComponent,
    ArticlesComponent,
    ProductComponent,
    AddOrderComponent,
    ArticleDetailesComponent,
    RatingComponent,
    ProfileComponent,
    OrdersComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class MainModule { }
