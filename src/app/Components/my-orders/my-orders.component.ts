import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/Services/Data/order-data.service';
import { CustomerDataService } from 'src/app/Services/Data/customer-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  constructor(private service: OrderDataService, private custService: CustomerDataService, private router: Router) { }

  custId: Number
  orderArray = []
  ngOnInit() {

    this.getCustOrders()
  }

  async getCustOrders() {
    var custName = sessionStorage.getItem('username')
    this.custService.getCustomerId(custName).subscribe(data => {this.custId = data})
    await this.sleep(100)
    this.service.getCustOrders(this.custId).subscribe(data => {this.orderArray = data})
    console.log(this.orderArray)
  }

  editOrder(orderId: Number) {
    this.router.navigate(['editOrder',orderId])
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



}
