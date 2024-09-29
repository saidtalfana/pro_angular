import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByUserComponent } from './order-by-user/order-by-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UserComponent,
    OrderByUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule    


  ]

  
})
export class UserModule { }
