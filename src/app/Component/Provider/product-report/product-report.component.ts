import { Component } from '@angular/core';
import { ReportService } from 'src/app/service/ReportService';

@Component({
  selector: 'app-product-report',
  templateUrl: './product-report.component.html',
  styleUrls: ['./product-report.component.css']
})
export class ProductReportComponent {
   constructor(private reportService: ReportService) {}

downloadReport() {
  this.reportService.downloadProductReport().subscribe((response) => {
    const blob = new Blob([response], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products_report.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, error => {
    console.error('Error downloading report:', error);
  });

}}
