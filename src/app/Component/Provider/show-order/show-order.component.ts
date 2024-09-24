import { Component, OnInit } from '@angular/core';
import { OrderDto } from 'src/app/dto/OrderDto';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {

  listOrder :OrderDto[]=[]
  enterprise_id!:number;
  Column : string[] = ["id","date","time","name","address","email","phoneNumber","customerRequest"]

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getEnterpriseId()
    this.fetchAllOrderByEnterprise()
  }

  getEnterpriseId(){
    const fetch_id :any= localStorage.getItem("enterprise_id")
    this.enterprise_id=fetch_id
  }

  fetchAllOrderByEnterprise(){
    this.orderService.getAllOrdersByEnterpriseId(this.enterprise_id).subscribe((res:OrderDto[])=>{
      this.listOrder = res
  console.log(res);
  
    })
  }
}
