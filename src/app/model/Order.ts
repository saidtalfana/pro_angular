import { Time } from "@angular/common";
import { Product } from "./Product";
import { User } from "./User";


export interface Order{


      
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