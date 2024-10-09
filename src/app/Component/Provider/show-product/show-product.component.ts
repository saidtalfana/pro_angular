import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from 'src/app/dto/ProductDto';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  listProduct !: ProductDto[]
  enterpriseId !: number
  selectedProductId: number | null = null; 
  constructor(private productService : ProductService , private router:Router) { }

  ngOnInit(): void {
    this.fetchEntrpriseId()
    this.fetchProduct()
  }

  fetchEntrpriseId(){
    const id : any= localStorage.getItem("enterprise_id")
    this.enterpriseId  = id
  }

  fetchProduct(){
this.productService.getAllProductByEnterpriseId(this.enterpriseId).subscribe((res:ProductDto[])=>{
  this.listProduct =res
  console.log(res);
  
})
  }

  delete(id : number){
    this.productService.deleteProduct(id).subscribe()
    this.fetchEntrpriseId()
  }

 
  getProductId(id:number){
 this.router.navigate(['/product_id',id]);
 this.selectedProductId = this.selectedProductId === id ? null :id;
  }

}
