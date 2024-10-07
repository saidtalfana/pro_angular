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
import { MaterialModule } from 'src/app/shared/material.module';
import { ProductChartComponent } from './product-chart/product-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgChartsModule } from 'ng2-charts';
import { ProductReportComponent } from './product-report/product-report.component'; // Ensure you have this import


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
    ProductChartComponent,
    ProductReportComponent,

  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgbModule,
    NgChartsModule // Add NgChartsModule to imports
  ]
})
export class ProviderModule { }
