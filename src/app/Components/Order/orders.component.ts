import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/Services/Data/order-data.service';
import { Router } from '@angular/router';

export class Order {
  orderId: number
  custId: number
  orderAmount: number
  constructor(OrderId: number, OrderAmnt: number, CustId: number, OrderLocation: String) {
    this.custId = CustId
  }
  getCustId() {
    return this.custId
  }

  getOrderId() {
    return this.orderId
  }


}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders = []
  constructor(private service: OrderDataService, private router: Router) { }

  ngOnInit() {
    this.getAllOrders();
  } 

  getAllOrders() {
    this.service.requestOrders().subscribe(data => { this.orders = data })
  }

  deleteOrder(id: number) {
    this.service.deleteOrder(id).subscribe(response => { this.getAllOrders() });
  }

  editOrder(id: number) {
    this.router.navigate(['editOrder', id]);
  }

}
