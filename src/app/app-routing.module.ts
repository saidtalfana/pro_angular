import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './Component/Admin/add-article/add-article.component';
import { AddProductComponent } from './Component/Provider/add-product/add-product.component';
import { AddOrderComponent } from './Component/User/add-order/add-order.component';

const routes: Routes = [

  { path: 'dashboard', component: AddArticleComponent },
  { path: 'user', component: AddOrderComponent },
  { path: 'provider', component: AddProductComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
