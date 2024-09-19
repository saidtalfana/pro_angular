import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from 'src/app/dto/ProductDto';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  listProduct !: ProductDto[]
  // enterprise_id !: number
  constructor(private productService : ProductService , private router:Router) { }

  ngOnInit(): void {
    // this.fetchEntrpriseId()
    this.fetchProduct()
  }

  // fetchEntrpriseId(){
  //   const id : any= localStorage.getItem("enterprise_id")
  //   this.enterprise_id  = id
  // }

  fetchProduct(){
this.productService.fetchAllProduct().subscribe((res:ProductDto[])=>{
  this.listProduct =res
  console.log(res);
  
})
  }

  // delete(id : number){
  //   this.productService.deleteProduct(id).subscribe()
  //   this.fetchEntrpriseId()
  // }
 
//   getProductId(id:number){
//  this.router.navigate(['/product_id',id]);
//  this.selectedProductId = this.selectedProductId === id ? null :id;
//   }


showDetails(id:number){
     this.router.navigate(['/product_details',id]);
}


}
