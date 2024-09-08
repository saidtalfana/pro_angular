import { Time } from "@angular/common";

export interface OrderDto {
    
    orderId      :number;
    orderDate    :Date;
    orderTime    :Time;
    orderQuantity:number;
    orderPrice   :number;
    orderTotal   :number; 
    

  }