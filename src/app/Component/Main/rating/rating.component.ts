import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from 'src/app/model/Rating';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratings: Rating[] = [];
  productId!: number;

  

  constructor(
    private ratingService: RatingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductId();
    console.log(this.getProductId());
     // Ensure productId is set before fetching ratings
    this.fetchRatings(); // Fetch ratings using the productId
  }

  getProductId(): void {
    // Change 'productId' to match the route parameter name
    this.route.params.subscribe(params => {
      this.productId = +params['productId']; // Ensure you are using the correct param name
    });
  }

  fetchRatings(): void {
    this.ratingService.getRatingsByProductId(this.productId).subscribe(
      (data) => {
        this.ratings = data;
      },
      (error) => {
        console.error('Error fetching ratings', error);
      }
    );
  }
}
