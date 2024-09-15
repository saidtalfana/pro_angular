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
  enterprise_id !: number
  selectedProductId: number | null = null; 
  constructor(private productService : ProductService , private router:Router) { }

  ngOnInit(): void {
    this.fetchAllProduct()
  }

  

  fetchAllProduct(){
this.productService.fetchAllProduct().subscribe((res:ProductDto[])=>{
this.listProduct = res
console.log(res);

})

  }

 
  detailsOfProduct(id:number){
 this.router.navigate(['/datail_product_id',id]);
 this.selectedProductId = this.selectedProductId === id ? null :id;
  }

}
