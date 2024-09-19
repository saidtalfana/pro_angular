import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductDto } from 'src/app/dto/ProductDto';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.css']
})
export class ProductDatailsComponent implements OnInit{

  productDetails:ProductDto | null = null;
  product_id!:number;
  constructor(private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router
  ){

  }
  ngOnInit(): void {
    this.getProductDatailsId()
    this.detailsProduct()
  }

  detailsProduct(){
    this.productService.getProductById(this.product_id).subscribe((res:ProductDto)=>{
      this.productDetails = res
      console.log(res);
      
    })
  }

  getProductDatailsId(): void {
    this.route.params.subscribe(params => {
      this.product_id = +params['id'];
      console.log(this.product_id);
    });
  }

  productOrderId(id:number){
    this.router.navigate(['/product_id',id]);
     }


}
