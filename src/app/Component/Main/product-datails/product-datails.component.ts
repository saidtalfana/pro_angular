import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseDto } from 'src/app/dto/EnterpriseDto';
import { ProductDto } from 'src/app/dto/ProductDto';
import { Rating } from 'src/app/model/Rating';
import { EnterpriseService } from 'src/app/service/enterprise.service';
import { ProductService } from 'src/app/service/product.service';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.css']
})
export class ProductDatailsComponent implements OnInit {
  productDetails: ProductDto | null = null;
  productId!: number;
  recommendedProducts: ProductDto[] = []; // Property for recommendations
  enterpriseDetails!: EnterpriseDto;
  averageStars: { [key: number]: number } = {}; // To store average stars for products
  ratings: Rating[] = []; // Property for storing ratings
  showRatings: boolean = false;
  constructor(
    private productService: ProductService,
    private enterpriseService: EnterpriseService,
    private ratingService : RatingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductDatailsId();
    this.detailsProduct();
    this.loadEnterpriseDetails();
  }

  // Fetch product details by ID
  detailsProduct(): void {
    this.productService.getProductById(this.productId).subscribe(
      (res: ProductDto) => {
        this.productDetails = res;
        this.loadRecommendations(); // Fetch recommendations after getting product details
        this.loadAverageRating(); // Load average rating for the product
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  // Fetch the product ID from route parameters
  getProductDatailsId(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
  }

  // Navigate to order page
  productOrderId(id: number): void {
    this.router.navigate(['main/product_id', id]);
  }

  // Navigate to article details
  showDetailsofArticle(id: number): void {
    this.router.navigate(['main/article_details', id]);
  }

  // Load product recommendations based on category and price
  loadRecommendations(): void {
    if (this.productDetails) {
      this.productService.recommendByCategoryAndPrice(this.productDetails.category, this.productDetails.price)
        .subscribe(
          (data: ProductDto[]) => {
            this.recommendedProducts = data;
          },
          (error) => {
            console.error('Error fetching recommendations:', error);
          }
        );
    }
  }

  // Show detailed view of a product by ID
  showDetails(id: number): void {
    this.router.navigate(['/main/product_details', id]).then(() => {
      this.getProductDatailsId(); // Refresh product details after navigating
      this.detailsProduct();
    });
  }

  // Fetch the enterprise details by product ID
  loadEnterpriseDetails(): void {
    this.enterpriseService.getEnterpriseByProductId(this.productId).subscribe(
      (data: EnterpriseDto) => {
        this.enterpriseDetails = data;
      },
      (error) => {
        console.error('Error fetching enterprise details:', error);
      }
    );
  }

  // Load average rating for the product
  loadAverageRating(): void {
    if (this.productId) {
      this.productService.getAverageStars(this.productId).subscribe(
        (rating: number) => {
          this.averageStars[this.productId] = rating; // Store the average rating for the product
        },
        (error) => {
          console.error('Error fetching average rating:', error);
        }
      );
    }
  }

  // Helper method to calculate stars for ratings
  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return [
      ...Array(fullStars).fill('fa fa-star'),
      ...Array(halfStars).fill('fa fa-star-half-o'),
      ...Array(emptyStars).fill('fa fa-star-o')
    ];
  }

  goToRatings(): void {
    if (this.showRatings) {
      this.showRatings = false; // Hide ratings if they are already shown
    } else {
      // Fetch ratings for the product and display them
      this.ratingService.getRatingsByProductId(this.productId).subscribe(
        (ratings: Rating[]) => {
          this.ratings = ratings;
          this.showRatings = true; // Show ratings when they are fetched
        },
        (error) => {
          console.error('Error fetching ratings', error);
        }
      );
    }
  }


}
