import { Component, OnInit } from '@angular/core';
import { OrderDto } from 'src/app/dto/OrderDto';
import { OrderService } from 'src/app/service/order.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
listOrder !: OrderDto[]
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
      this.listOrder=res
      console.log(res);
      
    })
  }

}
