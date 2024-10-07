// product-datails.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseDto } from 'src/app/dto/EnterpriseDto';
import { ProductDto } from 'src/app/dto/ProductDto';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.css']
})
export class ProductDatailsComponent implements OnInit {
  productDetails: ProductDto | null = null;
  productId!: number;
  recommendedProducts: ProductDto[] = []; // New property for recommendations
  enterpriseDetails!:EnterpriseDto
  constructor(private productService: ProductService,private enterpriseService:EnterpriseService ,private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getProductDatailsId();
    this.detailsProduct();
    this.loadEnterpriseDetails()
  }

  detailsProduct(): void {
    this.productService.getProductById(this.productId).subscribe((res: ProductDto) => {
      this.productDetails = res;
      this.loadRecommendations(); // Fetch recommendations after fetching product details
    });
  }

  getProductDatailsId(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
  }

  productOrderId(id: number): void {
    this.router.navigate(['main/product_id', id]);
  }

  showDetailsofArticle(id: number): void {
    this.router.navigate(['main/article_details', id]);
  }

 

  // New method to load recommendations
  loadRecommendations(): void {
    if (this.productDetails) {
      this.productService.recommendByCategoryAndPrice(this.productDetails.category, this.productDetails.price)
        .subscribe(data => {
          this.recommendedProducts = data; // Update recommended products
        }, error => {
          console.error('Error fetching recommendations:', error);
        });
    }
  }


  showDetails(id: number): void {
    this.router.navigate(['/main/product_details', id]).then(() => {
      this.getProductDatailsId(); // Refresh product details after navigating
      this.detailsProduct();
    });}



    loadEnterpriseDetails(): void {
      this.enterpriseService.getEnterpriseByProductId(this.productId).subscribe(
        (data) => {
          this.enterpriseDetails = data;
        },
        (error) => {
          console.error('Error fetching enterprise:', error);
        }
      );
    }
}
