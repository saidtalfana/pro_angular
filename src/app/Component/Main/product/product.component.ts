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
  pageSize = 10;
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
    const params: any = {
      category: this.filter.category,
      minPrice: this.filter.minPrice,
      maxPrice: this.filter.maxPrice,
      name: this.filter.name
    };}

    
}
