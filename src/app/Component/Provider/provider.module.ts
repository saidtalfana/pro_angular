import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderRoutingModule } from './provider-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardProviderComponent } from './dashboard-provider/dashboard-provider.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEnterpriseComponent } from './add-enterprise/add-enterprise.component';
import { ShowEnterpriseComponent } from './show-enterprise/show-enterprise.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { LogoutModule } from '../Shared/logout/logout.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    AddProductComponent,
    DashboardProviderComponent,
    ShowProductComponent,
    AddEnterpriseComponent,
    ShowEnterpriseComponent,
    ShowOrderComponent,
    NavBarComponent,
    SideBarComponent,
    ProductChartComponent,
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgChartsModule,
    MaterialModule,
    LogoutModule
  ]
})
export class ProviderModule { }
