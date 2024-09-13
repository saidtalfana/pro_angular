import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './Component/Admin/dashboard-admin/dashboard-admin.component';
import { UserComponent } from './Component/User/user/user.component';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { AddArticleComponent } from './Component/Admin/add-article/add-article.component';
import { ShowArticleComponent } from './Component/Admin/show-article/show-article.component';
import { SideBarComponent } from './Component/Admin/side-bar/side-bar.component';
import { HeaderComponent } from './Component/Main/header/header.component';
import { FooterComponent } from './Component/Main/footer/footer.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { AddProductComponent } from './Component/Provider/add-product/add-product.component';
import { DashboardProviderComponent } from './Component/Provider/dashboard-provider/dashboard-provider.component';
import { AddEnterpriseComponent } from './Component/Provider/add-enterprise/add-enterprise.component';
import { ShowEnterpriseComponent } from './Component/Provider/show-enterprise/show-enterprise.component';
import { ShowProductComponent } from './Component/Provider/show-product/show-product.component';
import { AddOrderComponent } from './Component/User/add-order/add-order.component';
import { ShowOrderComponent } from './Component/User/show-order/show-order.component';
import { LogoutComponent } from './Component/Shared/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './Component/Main/signup/signup.component';
import { Interciptor } from './interciptor/interciptor';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardAdminComponent,
    DashboardAdminComponent,
    UserComponent,
    AddArticleComponent,
    ShowArticleComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddProductComponent,
    DashboardProviderComponent,
    AddEnterpriseComponent,
    ShowEnterpriseComponent,
    ShowProductComponent,
    AddOrderComponent,
    ShowOrderComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    
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
