import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';




import { jwtDecode } from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
   formOrder !:FormGroup
   userId !:number ;
   id_product !:number;
   productId!:number ;
  constructor(private orderService :OrderService,private fb:FormBuilder,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.getUserId()
    this.getProductId()
    this.Order()
  }

  Order(){
    this.formOrder=this.fb.group({
       name:["",Validators.required],
       address : ["",Validators.required],
       email:["",Validators.required],
       phoneNumber:["",Validators.required],
       customerRequest:["",Validators.required]
    })
  }

  getUserId(){
     const token :any= localStorage.getItem("jwt")
     const decodeToken :any= jwtDecode(token)
     this.userId = decodeToken.id
  }
  getProductId(): void {
      this.route.params.subscribe(params => {
      this.productId = +params['id'];
      console.log(this.productId);
    });
  }

  onSubmit(){
  const valid = this.formOrder.valid;
  if(valid){
    const value = this.formOrder.value
    this.orderService.addOrder(value,this.productId,this.userId).subscribe()
    console.log(value);
    
    this.formOrder.reset()

  }
}

}
