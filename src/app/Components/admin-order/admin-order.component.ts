import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from 'src/app/Services/Data/customer-data.service';
import { OrderDataService } from 'src/app/Services/Data/order-data.service';
import { Order } from '../Order/orders.component';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {
  custId: number
  name: String
  order: Order
  custArray = []
  protected router: Router
  protected authen: AuthenticationService
  protected login: LoginComponent
  protected custService: CustomerDataService
  constructor(private service: CustomerDataService, private service2: OrderDataService) {
  }

  ngOnInit() {
  }

  async createOrder(name: String, amount: number, destination: String) {
    var id: number = await this.getCustId(name)
    this.order = new Order(0, amount, this.custId, destination);
    this.service2.addOrder(amount, id, destination, this.order).subscribe(response => {alert("Order has been created Succesfully")});
    // if(sessionStorage.getItem('admin') == "true") {
    //   this.router.navigate(['orders'])
    // }
    // else {
    //   this.router.navigate(['myOrders'])
    // }
  }
  async getCustId(name: String) {
    var customerId: number
    this.service.getCustomerId(name).subscribe(data => { customerId = data })
    await this.sleep(2000)
    var custId: number = customerId.valueOf()
    return custId
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
