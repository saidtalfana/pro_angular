import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { OrderDto } from 'src/app/dto/OrderDto';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-by-user',
  templateUrl: './order-by-user.component.html',
  styleUrls: ['./order-by-user.component.css']
})
export class OrderByUserComponent implements OnInit {
  listOrders !: OrderDto[]
  user_id!:number
  
    constructor(private orderService:OrderService) { }
  
    ngOnInit(): void {
      this.getUserId()
      this.onSubmit()
    }
  
  
    getUserId(){
      const token :any= localStorage.getItem("jwt")
      const decodeToken:any= jwtDecode(token)
      this.user_id = decodeToken.id
      console.log(this.user_id);
      
    }
  
  
    onSubmit(){
      this.orderService.getAllOrdersByUserId(this.user_id).subscribe((res:OrderDto[])=>{
        this.listOrders=res
        console.log(res);
        
      })
    }
  
  }
  