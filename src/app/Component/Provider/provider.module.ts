import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardProviderComponent } from './dashboard-provider/dashboard-provider.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEnterpriseComponent } from './add-enterprise/add-enterprise.component';
import { ShowEnterpriseComponent } from './show-enterprise/show-enterprise.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AddProductComponent,
    DashboardProviderComponent,
    ShowProductComponent,
    SidebarComponent,
    DashboardProviderComponent,
    AddEnterpriseComponent,
    ShowEnterpriseComponent,
    ShowOrderComponent,
    NavBarComponent,
    SideBarComponent,

  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProviderModule { }
