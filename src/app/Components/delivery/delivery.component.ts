import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from 'src/app/Services/Data/customer-data.service';
import { OrderDataService } from 'src/app/Services/Data/order-data.service';
import { TrucksDataService } from 'src/app/Services/Data/trucks-data.service';
import { DeliveryDataService, Delivery } from 'src/app/Services/Data/delivery-data.service';
import { DriversDataService } from 'src/app/Services/Data/drivers-data.service';
import { Router } from '@angular/router';
import { Order } from '../Order/orders.component';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  custArray = []
  orderArray = []
  truckArray = []
  driverArray = []
  delivery: Delivery
  orderCheck: boolean
  orderDest: String

  constructor(private custService: CustomerDataService, private orderService: OrderDataService, private truckService: TrucksDataService, private service: DeliveryDataService, private driverService: DriversDataService, private router: Router) { }

  ngOnInit() {
    this.custService.retrieveCustomers().subscribe(data => { this.custArray = data })
    
    this.driverService.getAllDrivers().subscribe(data => { this.driverArray = data })
  }

  getOrdersForCust(id: number, orderId: Number) {
    this.orderService.getCustOrders(id).subscribe(data => { this.orderArray = data })
  }

  async createDelivery(regNo: String, orderId: number, date: Date, driver1: String, driver2: String) {
    var order: Order
    this.checkOrderStatus(orderId)
    this.orderDest = await this.getOrderDestination(orderId)
    order = new Order(0,0,0,"");
    await this.sleep(200)
    if(this.orderCheck != true) {
      this.orderService.dispatchDelivery(orderId,true, order).subscribe((data:boolean) => {})
      this.delivery = new Delivery(0, "", 0, "", "", date, "", false)
      this.service.createDelivery(regNo, orderId, driver1, driver2, date, this.orderDest, this.delivery).subscribe(response => { });
    }
    else {
      alert("This Order has already been assigned to a Delivery Please Select a Different Order")
    }

  }

  viewDeliveries() {
    this.router.navigate(['viewDelivery'])
  }

  async getTruckByCapacity(orderId: Number) {
    var amount
    this.orderService.getOrderAmount(orderId).subscribe(data => {amount = data})
    await this.sleep(200)
    this.truckService.getTrucksbyCapacity(amount).subscribe(data => {this.truckArray = data});
  }

  async checkOrderStatus(orderId: Number) {
    var truth: boolean
    this.orderService.getOrderStatus(orderId).subscribe((data: boolean) => {this.orderCheck = data; console.log(data)});
    await this.sleep(100)
    return this.orderCheck
  }

  async getOrderDestination(orderId: Number) {  
    var dest: String
    this.orderService.getOrderDestination(orderId).subscribe((data:String) => {dest = data})
    await this.sleep(50)
    return dest
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
