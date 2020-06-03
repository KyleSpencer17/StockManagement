import { Component, OnInit } from '@angular/core';
import { DeliveryDataService, Delivery } from 'src/app/Services/Data/delivery-data.service';
import { OrderDataService } from 'src/app/Services/Data/order-data.service';

@Component({
  selector: 'app-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.scss']
})
export class ViewDeliveryComponent implements OnInit {
  deliveryArray = []
  delivery: Delivery
  constructor(private service: DeliveryDataService, private orderService: OrderDataService) { }
  check: boolean

  ngOnInit() {
    this.service.getallDeliveries().subscribe(data => { this.deliveryArray = data });
  }

  deleteDelivery(trackingNum: Number, orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(response => { })
    this.service.deleteDelivery(trackingNum).subscribe(response => { this.service.getallDeliveries().subscribe(data => { this.deliveryArray = data; console.log(data) }); });
  }
}