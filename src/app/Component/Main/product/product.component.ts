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
  currentPage = 0;
  pageSize = 12;
  totalPages: number = 0;

  products: any[] = [];
  
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

  applyFilter() {
    this.productService.filterProducts(this.filter.category, this.filter.minPrice, this.filter.maxPrice, this.filter.name).subscribe(data => {
      this.listProduct = data;
      this.currentPage = 0; // Reset to first page
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
