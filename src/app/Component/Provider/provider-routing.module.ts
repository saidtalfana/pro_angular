import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProviderComponent } from './dashboard-provider/dashboard-provider.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { AddEnterpriseComponent } from './add-enterprise/add-enterprise.component';
import { ShowEnterpriseComponent } from './show-enterprise/show-enterprise.component';
import { ShowOrderComponent } from './show-order/show-order.component';
import { ProductChartComponent } from './product-chart/product-chart.component';

const routes: Routes = [
  {path: 'provider', component: DashboardProviderComponent},

  {path: '',
    component: DashboardProviderComponent,
      children: [
    {path: 'add_product', component: AddProductComponent},
    {path: 'show_products', component: ShowProductComponent},
    {path: 'add_enterprise', component: AddEnterpriseComponent},
    {path: 'show_enterprise', component: ShowEnterpriseComponent},
    {path: 'show_order', component: ShowOrderComponent},
    {path: 'show_product', component: ShowProductComponent},
    { path: 'update_enterprise/:id', component: AddEnterpriseComponent },
    { path: 'edit-product/:id', component: AddProductComponent },
    { path: 'product_inf', component: ProductChartComponent }]},

    { path: '', redirectTo: '/provider', pathMatch: 'full' },
    { path: '**', redirectTo: '/provider' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
