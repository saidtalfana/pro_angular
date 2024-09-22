import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { OrderByUserComponent } from './order-by-user/order-by-user.component';
import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [
  {path: '', component: UserComponent},
  { path: 'user',
     component: UserComponent ,
     children:[
  { path: 'order_by_user', component: OrderByUserComponent },
  { path: 'add_order', component: AddOrderComponent },
  { path: 'product_id/:id', component: AddOrderComponent }
  ]},



  { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: '**', redirectTo: '/user' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
