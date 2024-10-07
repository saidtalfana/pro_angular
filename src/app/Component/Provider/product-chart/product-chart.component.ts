import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductDto } from 'src/app/dto/ProductDto';
import { ProductCount } from 'src/app/enums/ProductsCount';
import { ProductService } from 'src/app/service/product.service';
import { Chart } from 'chart.js';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnInit, OnDestroy {
  numberOfProduct!: ProductDto;
  enterpriseId!: number;

  availableCount: number = 0;
  comingSoonCount: number = 0;
  outOfStockCount: number = 0;

  productNames: string[] = [];
  orderCounts: number[] = [];

  chart: Chart | undefined;
  orderChart: Chart | undefined;

  constructor(private productService: ProductService , private orderService:OrderService) {}

  ngOnInit(): void {
    this.getEnterpriseId();
    this.fetchNumberOfProduct();
    this.getProductsCount();
    this.fetchProductOrderCounts();  // Fetch order counts for products
  }

  getEnterpriseId() {
    const value: any = localStorage.getItem("enterprise_id");
    this.enterpriseId = Number(value);
    console.log(this.enterpriseId);
  }

  fetchNumberOfProduct() {
    this.productService.fetchNumberOfNumber(this.enterpriseId).subscribe((res) => {
      this.numberOfProduct = res;
      console.log(res);
    });
  }

  getProductsCount() {
    this.productService.getProductsCountByStatus(this.enterpriseId).subscribe({
      next: (counts: ProductCount) => {
        console.log('Counts Response:', counts);

        this.availableCount = counts.AVAILABLE || 0;
        this.comingSoonCount = counts.COMING_SOON || 0;
        this.outOfStockCount = counts.OUT_OF_STOCK || 0;

        console.log('Available Count:', this.availableCount);
        console.log('Coming Soon Count:', this.comingSoonCount);
        console.log('Out of Stock Count:', this.outOfStockCount);

        this.createChart();
      },
      error: (error) => {
        console.error('Error fetching product counts:', error);
      }
    });
  }

  fetchProductOrderCounts() {
    this.orderService.getProductOrdersCount(this.enterpriseId).subscribe({
      next: (data: [string, number][]) => { // Expecting an array of tuples
        console.log('Product Order Counts:', data);
  
        this.productNames = data.map(item => item[0]); // Get product names
        this.orderCounts = data.map(item => item[1]); // Get order counts
         
        // Log the populated arrays to verify
        console.log('Product Names:', this.productNames);
        console.log('Order Counts:', this.orderCounts);
         
        this.createOrderChart(); // Create chart after data is populated
      },
      error: (error) => {
        console.error('Error fetching product order counts:', error);
      }
    });
  }
  

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('productChart', {
      type: 'bar',
      data: {
        labels: ['Available', 'Coming Soon', 'Out of Stock'],
        datasets: [{
          label: 'Product Count',
          data: [this.availableCount, this.comingSoonCount, this.outOfStockCount],
          backgroundColor: ['#4CAF50', '#FF9800', '#F44336'],
          borderColor: ['#388E3C', '#F57C00', '#D32F2F'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createOrderChart() {
    if (this.orderChart) {
      this.orderChart.destroy();
    }
  
    // Log to check the values before creating the chart
    console.log('Creating Order Chart with Product Names:', this.productNames);
    console.log('Creating Order Chart with Order Counts:', this.orderCounts);
  
    if (this.productNames.length === 0 || this.orderCounts.length === 0) {
      console.warn('No data available for the order chart');
      return; // Prevent chart creation if no data
    }
  
    this.orderChart = new Chart('orderChart', {
      type: 'bar',
      data: {
        labels: this.productNames, // Ensure this is filled
        datasets: [{
          label: 'Number of Orders',
          data: this.orderCounts, // Ensure this is filled
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
    if (this.orderChart) {
      this.orderChart.destroy();
    }
  }
}