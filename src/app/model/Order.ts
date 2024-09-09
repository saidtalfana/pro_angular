import { Time } from "@angular/common";
import { Product } from "./Product";
import { User } from "./User";


export interface Order{


      orderId:number;
      orderDate:Date;
      orderTime:Time ;
      orderQuantity:number;
      orderPrice:number;
      orderTotal:number;

      product:Product;
      user : User
}