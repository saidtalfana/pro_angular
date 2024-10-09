import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { CommandDTO } from 'src/app/dto/CommandDTO';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: CommandDTO[] = [];
  userId !: number ; // Remplacez par l'ID de l'utilisateur actuel

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getUserId()
    this.loadOrders();
  }

  getUserId(){
    const value: any = localStorage.getItem("jwt")

    const decodeValue : any = jwtDecode (value)

    this.userId = decodeValue.id
  }

  loadOrders(): void {
    this.orderService.getOrdersByUserId(this.userId).subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des commandes', err);
      },
    });
  }
}