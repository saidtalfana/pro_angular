import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { ProductDatailsComponent } from './product-datails/product-datails.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { ArticleDetailesComponent } from './article-detailes/article-detailes.component';


const routes: Routes = [
   { path: '', component: MainComponent,
    children:[  
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'shop', component: ProductComponent },
  { path: 'product_details', component: ProductDatailsComponent },
  { path: 'article_details', component: ArticleDetailesComponent },
  { path: 'add_order', component: AddOrderComponent },
  { path: 'product_id/:id', component: AddOrderComponent ,canActivate:[AuthGuard]},
  { path: 'product_details/:id', component: ProductDatailsComponent  },
//   { path: 'datail_product_id/:id', component: ProductDatailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
