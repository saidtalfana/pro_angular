import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

      formProduct !: FormGroup;
      enterprise_id !: number
  constructor(private productService:ProductService , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getEnterpriseId()
    this.Product()
  
  }

  Product(){
    this.formProduct = this.fb.group({
       name:['',Validators.required],
       description:['',Validators.required],
       price:['',Validators.required],
       category:['',Validators.required],
       productStatus:['',Validators.required],
       image:['',Validators.required],
   
            })

  }
getEnterpriseId(){
  const id : any= localStorage.getItem("enterprise_id")
  this.enterprise_id =id
  console.log(this.enterprise_id);
  
}

  onSubmit():void{
    const value = this.formProduct.value
    this.productService.addProduct(value,this.enterprise_id).subscribe()
    console.log(value);
    
    this.Product()
    if(value){
      alert("product added")
    }
  }

}
