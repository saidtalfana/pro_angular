import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';
import { RatingService } from 'src/app/service/rating.service'; // Import the Rating Service
import { jwtDecode } from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  formOrder!: FormGroup;
  ratingForm!: FormGroup; // Add the rating form
  userId!: number;
  productId!: number;
  isOrderSuccess: boolean = false; // Flag for order success
  isRatingModalOpen: boolean = false; // Flag to control rating modal

  constructor(
    private orderService: OrderService,
    private ratingService: RatingService, // Inject RatingService
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getProductId();
    this.initOrderForm();
    this.initRatingForm(); // Initialize the rating form
  }

  initOrderForm() {
    this.formOrder = this.fb.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      customerRequest: ["", Validators.required]
    });
  }

  initRatingForm() {
    this.ratingForm = this.fb.group({
      stars: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', [Validators.required]]
    });
  }

  getUserId() {
    const token: any = localStorage.getItem("jwt");
    const decodeToken: any = jwtDecode(token);
    this.userId = decodeToken.id;
  }

  getProductId(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      console.log(this.productId);
    });
  }

  onSubmit() {
    if (this.formOrder.valid) {
      const value = this.formOrder.value;
      this.orderService.addOrder(value, this.productId, this.userId).subscribe(() => {
        this.isOrderSuccess = true; // Set order success to true
        this.openRatingModal(); // Open the rating modal after successful order
      });
      this.formOrder.reset();
      alert('Order submitted successfully');

    }
  }

  openRatingModal() {
    this.isRatingModalOpen = true; // Open the rating modal
  }

  closeRatingModal() {
    this.isRatingModalOpen = false; // Close the rating modal
  }

  submitRating() {
    const ratingValue = this.ratingForm.value;
    if (this.ratingForm.valid) {
      this.ratingService.submitRating(ratingValue, this.productId, this.userId).subscribe(() => {
        alert('Rating submitted successfully');
        this.closeRatingModal(); // Close the modal after submitting the rating
      });
    }
  }
}
