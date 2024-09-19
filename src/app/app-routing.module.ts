import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './Component/Admin/add-article/add-article.component';
import { AddProductComponent } from './Component/Provider/add-product/add-product.component';
import { AddOrderComponent } from './Component/User/add-order/add-order.component';
import { DashboardAdminComponent } from './Component/Admin/dashboard-admin/dashboard-admin.component';
import { ShowArticleComponent } from './Component/Admin/show-article/show-article.component';
import { HomeComponent } from './Component/Main/home/home.component';
import { AddEnterpriseComponent } from './Component/Provider/add-enterprise/add-enterprise.component';
import { DashboardProviderComponent } from './Component/Provider/dashboard-provider/dashboard-provider.component';
import { UserComponent } from './Component/User/user/user.component';
import { ProductDatailsComponent } from './Component/Main/product-datails/product-datails.component';
import { SignupComponent } from './Component/Main/signup/signup.component';
import { SigninComponent } from './Component/Main/signin/signin.component';
import { ProductComponent } from './Component/Main/product/product.component';
import { ContactUsComponent } from './Component/Main/contact-us/contact-us.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardAdminComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'main', component: HomeComponent },
  { path: 'edit-article/:id', component: AddArticleComponent},
  { path: 'update_enterprise/:id', component: AddEnterpriseComponent },
  { path: 'enterprise', component: AddEnterpriseComponent },
  { path: 'shop', component: ProductComponent },
  { path: 'product_id/:id', component: AddOrderComponent },
  { path: 'product_details/:id', component: ProductDatailsComponent },
  { path: 'datail_product_id/:id', component: ProductDatailsComponent },
  { path: 'user', component: UserComponent },
  { path: 'provider', component: DashboardProviderComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
