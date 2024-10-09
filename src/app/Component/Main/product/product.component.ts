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

  listProduct!: ProductDto[];
  averageStars: { [key: number]: number } = {}; // Store average stars for each product
  currentPage = 0;
  pageSize = 12;
  totalPages: number = 0;

  filter = {
    category: '',
    minPrice: null,
    maxPrice: null,
    name: ''
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.currentPage, this.pageSize).subscribe(data => {
      this.listProduct = data.content;
      this.totalPages = data.totalPages;

      // Fetch average stars for each product
      this.listProduct.forEach(product => {
        this.productService.getAverageStars(product.productId).subscribe(stars => {
          this.averageStars[product.productId] = stars;
        });
      });
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.currentPage = newPage;
      this.loadProducts();
    }
  }

  showDetails(id: number): void {
    this.router.navigate(['main/product_details', id]);
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return [
      ...Array(fullStars).fill('fas fa-star'),
      ...(halfStar ? ['fas fa-star-half-alt'] : []),
      ...Array(emptyStars).fill('far fa-star')
    ];
  }
  
  applyFilter() {
    this.productService.filterProducts(this.filter.category, this.filter.minPrice, this.filter.maxPrice, this.filter.name).subscribe(data => {
      this.listProduct = data;
      this.currentPage = 0; // Reset to first page

      // Fetch average stars for each filtered product
      this.listProduct.forEach(product => {
        this.productService.getAverageStars(product.productId).subscribe(stars => {
          this.averageStars[product.productId] = stars;
        });
      });
    }, error => {
      console.error('Error fetching filtered products:', error);
    });
  }

  resetFilter() {
    // Resetting the filter object
    this.filter = {
      category: '',
      minPrice: null,
      maxPrice: null,
      name: ''
    };
  }
}
