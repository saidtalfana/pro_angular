import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from 'src/app/model/Rating';
import { RatingService } from 'src/app/service/rating.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {
  ratings: Rating[] = [];
  ratingForm!: FormGroup; // Declare a FormGroup
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private ratingService: RatingService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder 
  ) {
  
  }

  ngOnInit(): void {
    this.addForm()
    this.loadRatings();
  }
 addForm(){
  this.ratingForm = this.fb.group({
    stars: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
    comment: ['', [Validators.required]],
    productId: [0], 
    userId: [0]
  });
 }

  loadRatings() {
    this.ratingService.getRatingsByProduct(this.productId).subscribe(data => {
      this.ratings = data;
    });
  }

  submitRating() { 
    const value = this.ratingForm.value
    if(value)
    this.ratingService.submitRating(value).subscribe()
      
}
}
