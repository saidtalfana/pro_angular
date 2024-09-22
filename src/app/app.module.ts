import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { HeaderComponent } from './Component/Main/header/header.component';
import { FooterComponent } from './Component/Main/footer/footer.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './Component/Main/signup/signup.component';
import { Interciptor } from './interciptor/interciptor';
import { ProductDatailsComponent } from './Component/Main/product-datails/product-datails.component';
import { ContactUsComponent } from './Component/Main/contact-us/contact-us.component';
import { SearchComponent } from './Component/Main/search/search.component';
import { MainComponent } from './Component/Main/main/main.component';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
        useClass: Interciptor,
        multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
