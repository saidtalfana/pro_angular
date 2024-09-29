// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ProductService } from 'src/app/service/product.service';

// @Component({
//   selector: 'app-add-product',
//   templateUrl: './add-product.component.html',
//   styleUrls: ['./add-product.component.css']
// })
// export class AddProductComponent implements OnInit {
//   formProduct!: FormGroup;
//   enterprise_id!: number;
//   selectedImage!: File;

//   constructor(private productService: ProductService, private fb: FormBuilder) { }

//   ngOnInit(): void {
//     this.getEnterpriseId();
//     this.initializeProductForm();

//     // Subscribe to the products$ observable to react to changes
//     this.productService.products$.subscribe((products) => {
//       console.log('Updated product list:', products);
//       // You can handle the updated product list here if needed
//     });
//   }

//   initializeProductForm() {
//     this.formProduct = this.fb.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required],
//       price: ['', Validators.required],
//       category: ['', Validators.required],
//       productStatus: ['', Validators.required],
//       image: ['', Validators.required],
//     });
//   }

//   getEnterpriseId() {
//     const id: any = localStorage.getItem("enterprise_id");
//     this.enterprise_id = id;
//     console.log(this.enterprise_id);
//   }

//   onFileChange(event: any) {
//     if (event.target.files.length > 0) {
//       this.selectedImage = event.target.files[0]; // Get the actual File object
//     }
//   }

//   onSubmit(): void {
//     const value = this.formProduct.value;
//     this.productService.addProduct(value, this.enterprise_id, this.selectedImage).subscribe(() => {
//       alert("Product added");
//       this.initializeProductForm(); // Reset the form after submission
//     });
//   }
// }



















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
      enterprise_id !: number;
      selectedImage!: File;
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
onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0]; // Get the actual File object
    }
  }
  onSubmit():void{
    const value = this.formProduct.value
    this.productService.addProduct(value,this.enterprise_id,this.selectedImage).subscribe()
    console.log(value);
    
    this.Product()
    if(value){
      alert("product added")
    }
    this.Product()
  }

}
