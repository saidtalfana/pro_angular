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
   user_id !:number ;
   id_product :number=256;
   product_id!:number ;
  constructor(private orderService :OrderService,private fb:FormBuilder,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.Order()
    this.getUserId()
    this.getProductId()
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
     this.user_id = decodeToken.id
  }
  getProductId(): void {
    this.route.params.subscribe(params => {
      this.product_id = +params['id'];
      console.log(this.product_id);
    });
  }

  onSubmit(){
  const valid = this.formOrder.valid;
  if(valid){
    const value = this.formOrder.value
    this.orderService.addOrder(value,this.id_product,this.user_id).subscribe()
    console.log(value);
    
    this.formOrder.reset()

  }
}

}
