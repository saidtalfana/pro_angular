import { Time } from "@angular/common";
import { User } from "../model/User";
import { Product } from "../model/Product";

export interface OrderDto {
    
  orderId : number;
  orderDate : Date;
  orderTime :Time;
  name : string;
  address : string;
  email:string;
  phoneNumber :string;
  customerRequest :string ;

  product : Product;
 user :User

  }